export function randomStr(len: number = 32) {
  let _instance = null;

  function _module(lens: number) {
    let $chars =
      'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    let maxPos = $chars.length;
    let pwd = '';
    for (let i = 0; i < lens; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  }

  if (!_instance) {
    _instance = _module(len);
  }

  return _instance;
}

export default randomStr;
