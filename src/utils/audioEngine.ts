// Procedural Web Audio API sound generator for tactile reading experience

let audioCtx: AudioContext | null = null;
let ambientGainNode: GainNode | null = null;
let currentAmbientType: string | null = null;
let ambientNodes: (AudioNode | number)[] = [];

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Procedural paper page turn sound:
 * Creates an authentic tactile paper rustle using filtered noise bursts with soft envelope.
 */
export function playPageFlipSound(volume: number = 0.4): void {
  try {
    const ctx = getAudioContext();
    const bufferSize = ctx.sampleRate * 0.12; // 120ms duration
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      // Noise with gentle decay
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 1.8);
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // Filter to simulate paper frequency
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(700, ctx.currentTime + 0.1);
    filter.Q.value = 1.2;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(volume * 0.45, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.11);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
  } catch (err) {
    console.debug('Audio page flip disabled or unavailable', err);
  }
}

/**
 * Procedural ambient soundscapes (Rain, Fireplace, Library hush)
 */
export function startAmbientSound(type: 'none' | 'rain' | 'fire' | 'library', volume: number = 0.5): void {
  stopAmbientSound();

  if (type === 'none') {
    currentAmbientType = null;
    return;
  }

  try {
    const ctx = getAudioContext();
    ambientGainNode = ctx.createGain();
    ambientGainNode.gain.setValueAtTime(volume * 0.5, ctx.currentTime);
    ambientGainNode.connect(ctx.destination);
    currentAmbientType = type;

    if (type === 'rain') {
      createRainSound(ctx, ambientGainNode);
    } else if (type === 'fire') {
      createFireplaceSound(ctx, ambientGainNode);
    } else if (type === 'library') {
      createLibraryHushSound(ctx, ambientGainNode);
    }
  } catch (err) {
    console.debug('Ambient sound error', err);
  }
}

export function updateAmbientVolume(volume: number): void {
  if (ambientGainNode && audioCtx) {
    ambientGainNode.gain.setValueAtTime(volume * 0.5, audioCtx.currentTime);
  }
}

export function stopAmbientSound(): void {
  ambientNodes.forEach(node => {
    if (typeof node === 'number') {
      window.clearInterval(node);
    } else {
      try {
        if ('stop' in node && typeof (node as AudioScheduledSourceNode).stop === 'function') {
          (node as AudioScheduledSourceNode).stop();
        }
        node.disconnect();
      } catch {
        // ignore
      }
    }
  });
  ambientNodes = [];
  if (ambientGainNode) {
    ambientGainNode.disconnect();
    ambientGainNode = null;
  }
  currentAmbientType = null;
}

function createRainSound(ctx: AudioContext, destination: AudioNode): void {
  // Continuous pink/white noise filtered for gentle steady rain
  const bufferSize = 2 * ctx.sampleRate;
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
    b6 = white * 0.115926;
  }

  const whiteNoise = ctx.createBufferSource();
  whiteNoise.buffer = noiseBuffer;
  whiteNoise.loop = true;

  const lowpass = ctx.createBiquadFilter();
  lowpass.type = 'lowpass';
  lowpass.frequency.value = 850;

  whiteNoise.connect(lowpass);
  lowpass.connect(destination);
  whiteNoise.start();
  ambientNodes.push(whiteNoise, lowpass);

  // Periodic subtle droplet clicks
  const dropletInterval = window.setInterval(() => {
    if (!audioCtx || audioCtx.state !== 'running') return;
    try {
      const osc = ctx.createOscillator();
      const dropGain = ctx.createGain();
      osc.type = 'sine';
      const freq = 1200 + Math.random() * 900;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.6, ctx.currentTime + 0.04);

      dropGain.gain.setValueAtTime(0.015, ctx.currentTime);
      dropGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);

      osc.connect(dropGain);
      dropGain.connect(destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // ignore
    }
  }, 350);

  ambientNodes.push(dropletInterval);
}

function createFireplaceSound(ctx: AudioContext, destination: AudioNode): void {
  // Low gentle warm rumble
  const bufferSize = 2 * ctx.sampleRate;
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const output = noiseBuffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    output[i] = (Math.random() * 2 - 1) * 0.08;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;
  noise.loop = true;

  const lowpass = ctx.createBiquadFilter();
  lowpass.type = 'lowpass';
  lowpass.frequency.value = 240;

  noise.connect(lowpass);
  lowpass.connect(destination);
  noise.start();
  ambientNodes.push(noise, lowpass);

  // Random wood crackles
  const crackleInterval = window.setInterval(() => {
    if (!audioCtx || audioCtx.state !== 'running' || Math.random() > 0.45) return;
    try {
      const crackle = ctx.createBufferSource();
      const clickLen = Math.floor(ctx.sampleRate * 0.008);
      const clickBuf = ctx.createBuffer(1, clickLen, ctx.sampleRate);
      const clickData = clickBuf.getChannelData(0);
      for (let i = 0; i < clickLen; i++) {
        clickData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (clickLen * 0.3));
      }
      crackle.buffer = clickBuf;

      const crackleGain = ctx.createGain();
      crackleGain.gain.value = 0.08 + Math.random() * 0.06;

      crackle.connect(crackleGain);
      crackleGain.connect(destination);
      crackle.start();
    } catch {
      // ignore
    }
  }, 180);

  ambientNodes.push(crackleInterval);
}

function createLibraryHushSound(ctx: AudioContext, destination: AudioNode): void {
  // Deep warm room acoustics / brown noise
  const bufferSize = 2 * ctx.sampleRate;
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  let lastOut = 0.0;

  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    output[i] = (lastOut + 0.02 * white) / 1.02;
    lastOut = output[i];
    output[i] *= 0.15;
  }

  const brownNoise = ctx.createBufferSource();
  brownNoise.buffer = noiseBuffer;
  brownNoise.loop = true;

  const lowpass = ctx.createBiquadFilter();
  lowpass.type = 'lowpass';
  lowpass.frequency.value = 320;

  brownNoise.connect(lowpass);
  lowpass.connect(destination);
  brownNoise.start();
  ambientNodes.push(brownNoise, lowpass);
}
