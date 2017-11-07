import { NativeModules, NativeEventEmitter } from 'react-native';
import { PlaybackStatus } from '../../utils/iosConstants';

const { GoogleCast } = NativeModules;
const ChromecastEmitter = new NativeEventEmitter(GoogleCast);

export default class ChromeCastPlayback {
  onChromeCastMediaLoaded = (cb) => {
    ChromecastEmitter.addListener(PlaybackStatus.MEDIA_LOADED, () =>
      cb({
        playing: true,
      }),
    );
  }

  startMediaLoadedLister(cb) {
    this.mediaLoaded = this.onChromeCastMediaLoaded(cb);
  }

  stopMediaLoadedListener() {
    this.mediaLoaded.remove();
  }
}
