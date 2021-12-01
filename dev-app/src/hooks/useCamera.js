import { reactive, computed } from 'vue';
import Webcam from 'webcamjs';
import useStorage from './useStorage';

const useCamera = () => {
  const state = reactive({
    id: 'dev',
    data: null,
    stream: null,
  });
  const { uploadStream, getStream } = useStorage(state.id);

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
        Webcam.snap(async (data) => {
          state.data = data;
          uploadStream(state.data);
          state.stream = await getStream();
        });
      }
    }, 1000);
  };

  const stopFilming = () => { clearInterval(intervalId); };

  return {
    initCamera,
    startFilming,
    stopFilming,
    stream: computed(() => state.stream),
  };
};

export default useCamera;
