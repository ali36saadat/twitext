//UUIDv4
const uuidExport = function () {
   !(function (e) {
      if ("object" == typeof exports && "undefined" != typeof module)
         module.exports = e()
      else if ("function" == typeof define && define.amd) define([], e)
      else {
         ;("undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : this
         ).uuidv4 = e()
      }
   })(function () {
      return (function () {
         return function e(n, r, t) {
            function o(f, u) {
               if (!r[f]) {
                  if (!n[f]) {
                     var a = "function" == typeof require && require
                     if (!u && a) return a(f, !0)
                     if (i) return i(f, !0)
                     var p = new Error("Cannot find module '" + f + "'")
                     throw ((p.code = "MODULE_NOT_FOUND"), p)
                  }
                  var y = (r[f] = { exports: {} })
                  n[f][0].call(
                     y.exports,
                     function (e) {
                        return o(n[f][1][e] || e)
                     },
                     y,
                     y.exports,
                     e,
                     n,
                     r,
                     t
                  )
               }
               return r[f].exports
            }
            for (
               var i = "function" == typeof require && require, f = 0;
               f < t.length;
               f++
            )
               o(t[f])
            return o
         }
      })()(
         {
            1: [
               function (e, n, r) {
                  for (var t = [], o = 0; o < 256; ++o)
                     t[o] = (o + 256).toString(16).substr(1)
                  n.exports = function (e, n) {
                     var r = n || 0,
                        o = t
                     return [
                        o[e[r++]],
                        o[e[r++]],
                        o[e[r++]],
                        o[e[r++]],
                        "-",
                        o[e[r++]],
                        o[e[r++]],
                        "-",
                        o[e[r++]],
                        o[e[r++]],
                        "-",
                        o[e[r++]],
                        o[e[r++]],
                        "-",
                        o[e[r++]],
                        o[e[r++]],
                        o[e[r++]],
                        o[e[r++]],
                        o[e[r++]],
                        o[e[r++]],
                     ].join("")
                  }
               },
               {},
            ],
            2: [
               function (e, n, r) {
                  var t =
                     ("undefined" != typeof crypto &&
                        crypto.getRandomValues &&
                        crypto.getRandomValues.bind(crypto)) ||
                     ("undefined" != typeof msCrypto &&
                        "function" == typeof window.msCrypto.getRandomValues &&
                        msCrypto.getRandomValues.bind(msCrypto))
                  if (t) {
                     var o = new Uint8Array(16)
                     n.exports = function () {
                        return t(o), o
                     }
                  } else {
                     var i = new Array(16)
                     n.exports = function () {
                        for (var e, n = 0; n < 16; n++)
                           0 == (3 & n) && (e = 4294967296 * Math.random()),
                              (i[n] = (e >>> ((3 & n) << 3)) & 255)
                        return i
                     }
                  }
               },
               {},
            ],
            3: [
               function (e, n, r) {
                  var t = e("./lib/rng"),
                     o = e("./lib/bytesToUuid")
                  n.exports = function (e, n, r) {
                     var i = (n && r) || 0
                     "string" == typeof e &&
                        ((n = "binary" === e ? new Array(16) : null),
                        (e = null))
                     var f = (e = e || {}).random || (e.rng || t)()
                     if (
                        ((f[6] = (15 & f[6]) | 64),
                        (f[8] = (63 & f[8]) | 128),
                        n)
                     )
                        for (var u = 0; u < 16; ++u) n[i + u] = f[u]
                     return n || o(f)
                  }
               },
               { "./lib/bytesToUuid": 1, "./lib/rng": 2 },
            ],
         },
         {},
         [3]
      )(3)
   })
}

export default uuidExport
