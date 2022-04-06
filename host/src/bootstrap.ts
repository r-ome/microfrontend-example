// @ts-ignore
import { mount as remoteMount} from 'remote/Remote';
// @ts-ignore
import { mount as remote2Mount } from 'remote2/Remote2';

const el = document.querySelector('#root');
const el2 = document.querySelector('#remote-root');
if (el) {
  remoteMount(el);
  remote2Mount(el2);
}
