function FindProxyForURL(url, host) {
var regexpr_torrent = 
/(^|\.)(rutracker\.org|rutor\.info|rustorka\.com|kinozal\.tv|seasonvar\.ru|nnmclub\.to|kinokrad\.co|rezka\.ag|kinogo\.cc)$/;
if (regexpr_torrent.test(host))
{
return "HTTPS proxy-ssl.antizapret.prostovpn.org:3143; PROXY proxy-nossl.antizapret.prostovpn.org:29976; DIRECT";
};
return "DIRECT";
}
