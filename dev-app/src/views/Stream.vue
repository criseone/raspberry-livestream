<script>
import { onMounted } from 'vue';
import useCamera from '@/hooks/useCamera';
import useAuth from '@/hooks/useAuth';

export default {
  name: 'Stream',
  setup() {
    useAuth();
    const {
      initCamera,
      startFilming,
      stream,
    } = useCamera();

    onMounted(() => {
      initCamera();
      startFilming();
    });

    return {
      stream,
    };
  },
};
</script>
<template>
  <div class="stream">
    <h1>This is the stream page</h1>
    <div id="webcam"></div>
    <img :src="stream" />
  </div>
</template>
