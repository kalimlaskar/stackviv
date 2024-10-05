'use client'

const AIAudioTools = () => {
    return (
      <div className="max-w-7xl mx-auto mb-8 bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-purple-600 text-white p-5 text-center">
          <h1 className="text-xl font-bold">AI Audio Tools</h1>
          <p className="text-sm text-gray-200 mt-1">Discover the power of AI for audio processing</p>
        </div>
  
        {/* Grid for categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
          <CategoryItem title="Voice Generator" href="/ai-categories/voice-generator" />
          <CategoryItem title="Voice Changer" href="/ai-categories/voice-changer" />
          <CategoryItem title="Voice Cloning" href="/ai-categories/voice-cloning" />
          <CategoryItem title="Voiceover Generator" href="/ai-categories/voiceover-generator" />
          <CategoryItem title="Audio Generator" href="/ai-categories/audio-generator" />
          <CategoryItem title="Audio Editor" href="/ai-categories/audio-editor" />
          <CategoryItem title="Audio Enhancer" href="/ai-categories/audio-enhancer" />
          <CategoryItem title="Audio Transcription" href="/ai-categories/audio-transcription" />
          <CategoryItem title="Music Generator" href="/ai-categories/music-generator" />
          <CategoryItem title="Music Transcription" href="/ai-categories/music-transcription" />
          <CategoryItem title="Mastering" href="/ai-categories/mastering" />
          <CategoryItem title="Music Splitter" href="/ai-categories/music-splitter" />
          <CategoryItem title="Vocal Remover" href="/ai-categories/vocal-remover" />
          <CategoryItem title="Music Recommendation" href="/ai-categories/music-recommendation" />
          <CategoryItem title="Playlist Generator" href="/ai-categories/playlist-generator" />
          <CategoryItem title="Podcast" href="/ai-categories/podcast" />
          <CategoryItem title="Karaoke" href="/ai-categories/karaoke" />
          <CategoryItem title="Podcast Editor" href="/ai-categories/podcast-editing" />
          <CategoryItem title="Rap Generator" href="/ai-categories/rap-generator" />
          <CategoryItem title="Celebrity Voice Generator" href="/ai-categories/celebrity-voice-generator" />
          <CategoryItem title="Jingle Generator" href="/ai-categories/jingle-generator" />
          <CategoryItem title="Speech Recognition" href="/ai-categories/speech-recognition" />
          <CategoryItem title="Dubbing" href="/ai-categories/dubbing" />
        </div>
      </div>
    );
  };
  
  // Component for each category
  const CategoryItem = ({ title, href }) => (
    <div className="bg-gray-100 hover:bg-purple-600 hover:text-white transition-transform transform hover:translate-y-[-3px] p-4 rounded-md text-center">
      <a href={href} className="block font-medium">
        {title}
      </a>
    </div>
  );
  
  export default AIAudioTools;
  