import { DeviceEventEmitter, NativeModules } from 'react-native';

import { Events } from '../../utils/constants';

export default class ChromeCastPlayback {
  listenForPlaybackEvents = cb =>
    DeviceEventEmitter.addListener(Events.CAST_PLAYBACK, (e) => {
      cb({ action: e.PLAYBACK_ACTION, arg: e[e.PLAYBACK_ACTION] });
    });

  startScan(cb) {
    this.listener = this.listenForPlaybackEvents(cb);
  }

  stopScan() {
    this.listener.remove();
  }
}
