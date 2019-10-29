let cache = new Map();

let pending = new Map();

//清理过期缓存
setInterval(() => {
    cache.forEach((key, value) => {
        if (value.expireTime < new Date()) {
            cache.delete(key);
        }
    })
}, 60 * 1000);

export default function (key, provider, timeout) {
    if (!provider) throw new Error('provider can not be null');
    timeout = timeout || 10;//默认缓存时间10分钟
    return new Promise((resolve, reject) => {
        let now = new Date().getTime();
        let expireTime = new Date(now + timeout * 1000 * 60);
        let item = cache.has(key) ? cache.get(key) : null;
        if (item && item.expireTime > new Date()) {
            //命中缓存，刷新过期时间
            item.expireTime = expireTime;
            resolve(item.data);
        } else {
            if (pending.has(key)) {
                pending.get(key).push({
                    resolve, reject
                });
            } else {
                pending.set(key, [{
                    resolve, reject
                }]);
                provider().then(data => {
                    cache.set(key, {
                        data: data,
                        expireTime: expireTime
                    });
                    let all = pending.get(key);
                    pending.delete(key);
                    all.forEach(it => {
                        it.resolve(data);
                    })
                }).catch(error => {
                    let all = pending.get(key);
                    pending.delete(key);
                    all.forEach(it => {
                        it.reject(error);
                    })
                })
            }
        }
    });

}