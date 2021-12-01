import { reactive, computed } from 'vue';
import Webcam from 'webcamjs';

const useCamera = () => {
  const state = reactive({
    id: 'dev',
    currentPic: null,
  });

  const initCamera = () => {
    Webcam.set({
      width: 320,
      height: 240,
      dest_width: 640,
      dest_height: 480,
      image_format: 'jpeg',
      jpeg_quality: 90,
    });
    Webcam.attach('#webcam');
  };

  let webCamLoaded = false;
  Webcam.on('load', () => { webCamLoaded = true; });

  let intervalId;
  const startFilming = () => {
    intervalId = setInterval(() => {
      if (webCamLoaded) {
        Webcam.snap((data) => { state.currentPic = data; });
      }
    }, 1000);
  };

  const stopFilming = () => { clearInterval(intervalId); };

  return {
    initCamera,
    startFilming,
    stopFilming,
    stream: computed(() => state.currentPic),
  };
};

export default useCamera;
