/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5117],
  {
    13485: (e, t, r) => {
      "use strict";
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */
      const n = r(29098),
        i = r(4215),
        a =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      (t.lW = l), (t.h2 = 50);
      const o = 2147483647;
      function s(e) {
        if (e > o)
          throw new RangeError(
            'The value "' + e + '" is invalid for option "size"',
          );
        const t = new Uint8Array(e);
        return Object.setPrototypeOf(t, l.prototype), t;
      }
      function l(e, t, r) {
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number',
            );
          return d(e);
        }
        return c(e, t, r);
      }
      function c(e, t, r) {
        if ("string" == typeof e)
          return (function (e, t) {
            ("string" == typeof t && "" !== t) || (t = "utf8");
            if (!l.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
            const r = 0 | p(e, t);
            let n = s(r);
            const i = n.write(e, t);
            i !== r && (n = n.slice(0, i));
            return n;
          })(e, t);
        if (ArrayBuffer.isView(e))
          return (function (e) {
            if (H(e, Uint8Array)) {
              const t = new Uint8Array(e);
              return m(t.buffer, t.byteOffset, t.byteLength);
            }
            return f(e);
          })(e);
        if (null == e)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof e,
          );
        if (H(e, ArrayBuffer) || (e && H(e.buffer, ArrayBuffer)))
          return m(e, t, r);
        if (
          "undefined" != typeof SharedArrayBuffer &&
          (H(e, SharedArrayBuffer) || (e && H(e.buffer, SharedArrayBuffer)))
        )
          return m(e, t, r);
        if ("number" == typeof e)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number',
          );
        const n = e.valueOf && e.valueOf();
        if (null != n && n !== e) return l.from(n, t, r);
        const i = (function (e) {
          if (l.isBuffer(e)) {
            const t = 0 | h(e.length),
              r = s(t);
            return 0 === r.length || e.copy(r, 0, 0, t), r;
          }
          if (void 0 !== e.length)
            return "number" != typeof e.length || G(e.length) ? s(0) : f(e);
          if ("Buffer" === e.type && Array.isArray(e.data)) return f(e.data);
        })(e);
        if (i) return i;
        if (
          "undefined" != typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" == typeof e[Symbol.toPrimitive]
        )
          return l.from(e[Symbol.toPrimitive]("string"), t, r);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof e,
        );
      }
      function u(e) {
        if ("number" != typeof e)
          throw new TypeError('"size" argument must be of type number');
        if (e < 0)
          throw new RangeError(
            'The value "' + e + '" is invalid for option "size"',
          );
      }
      function d(e) {
        return u(e), s(e < 0 ? 0 : 0 | h(e));
      }
      function f(e) {
        const t = e.length < 0 ? 0 : 0 | h(e.length),
          r = s(t);
        for (let n = 0; n < t; n += 1) r[n] = 255 & e[n];
        return r;
      }
      function m(e, t, r) {
        if (t < 0 || e.byteLength < t)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return (
          (n =
            void 0 === t && void 0 === r
              ? new Uint8Array(e)
              : void 0 === r
              ? new Uint8Array(e, t)
              : new Uint8Array(e, t, r)),
          Object.setPrototypeOf(n, l.prototype),
          n
        );
      }
      function h(e) {
        if (e >= o)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              o.toString(16) +
              " bytes",
          );
        return 0 | e;
      }
      function p(e, t) {
        if (l.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || H(e, ArrayBuffer)) return e.byteLength;
        if ("string" != typeof e)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof e,
          );
        const r = e.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        let i = !1;
        for (;;)
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return $(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return V(e).length;
            default:
              if (i) return n ? -1 : $(e).length;
              (t = ("" + t).toLowerCase()), (i = !0);
          }
      }
      function y(e, t, r) {
        let n = !1;
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return "";
        if ((r >>>= 0) <= (t >>>= 0)) return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return j(this, t, r);
            case "utf8":
            case "utf-8":
              return E(this, t, r);
            case "ascii":
              return F(this, t, r);
            case "latin1":
            case "binary":
              return R(this, t, r);
            case "base64":
              return z(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return x(this, t, r);
            default:
              if (n) throw new TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (n = !0);
          }
      }
      function g(e, t, r) {
        const n = e[t];
        (e[t] = e[r]), (e[r] = n);
      }
      function b(e, t, r, n, i) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          G((r = +r)) && (r = i ? 0 : e.length - 1),
          r < 0 && (r = e.length + r),
          r >= e.length)
        ) {
          if (i) return -1;
          r = e.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (("string" == typeof t && (t = l.from(t, n)), l.isBuffer(t)))
          return 0 === t.length ? -1 : v(e, t, r, n, i);
        if ("number" == typeof t)
          return (
            (t &= 255),
            "function" == typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(e, t, r)
                : Uint8Array.prototype.lastIndexOf.call(e, t, r)
              : v(e, [t], r, n, i)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function v(e, t, r, n, i) {
        let a,
          o = 1,
          s = e.length,
          l = t.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (o = 2), (s /= 2), (l /= 2), (r /= 2);
        }
        function c(e, t) {
          return 1 === o ? e[t] : e.readUInt16BE(t * o);
        }
        if (i) {
          let n = -1;
          for (a = r; a < s; a++)
            if (c(e, a) === c(t, -1 === n ? 0 : a - n)) {
              if ((-1 === n && (n = a), a - n + 1 === l)) return n * o;
            } else -1 !== n && (a -= a - n), (n = -1);
        } else
          for (r + l > s && (r = s - l), a = r; a >= 0; a--) {
            let r = !0;
            for (let n = 0; n < l; n++)
              if (c(e, a + n) !== c(t, n)) {
                r = !1;
                break;
              }
            if (r) return a;
          }
        return -1;
      }
      function B(e, t, r, n) {
        r = Number(r) || 0;
        const i = e.length - r;
        n ? (n = Number(n)) > i && (n = i) : (n = i);
        const a = t.length;
        let o;
        for (n > a / 2 && (n = a / 2), o = 0; o < n; ++o) {
          const n = parseInt(t.substr(2 * o, 2), 16);
          if (G(n)) return o;
          e[r + o] = n;
        }
        return o;
      }
      function w(e, t, r, n) {
        return Y($(t, e.length - r), e, r, n);
      }
      function _(e, t, r, n) {
        return Y(
          (function (e) {
            const t = [];
            for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
            return t;
          })(t),
          e,
          r,
          n,
        );
      }
      function M(e, t, r, n) {
        return Y(V(t), e, r, n);
      }
      function S(e, t, r, n) {
        return Y(
          (function (e, t) {
            let r, n, i;
            const a = [];
            for (let o = 0; o < e.length && !((t -= 2) < 0); ++o)
              (r = e.charCodeAt(o)),
                (n = r >> 8),
                (i = r % 256),
                a.push(i),
                a.push(n);
            return a;
          })(t, e.length - r),
          e,
          r,
          n,
        );
      }
      function z(e, t, r) {
        return 0 === t && r === e.length
          ? n.fromByteArray(e)
          : n.fromByteArray(e.slice(t, r));
      }
      function E(e, t, r) {
        r = Math.min(e.length, r);
        const n = [];
        let i = t;
        for (; i < r; ) {
          const t = e[i];
          let a = null,
            o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
          if (i + o <= r) {
            let r, n, s, l;
            switch (o) {
              case 1:
                t < 128 && (a = t);
                break;
              case 2:
                (r = e[i + 1]),
                  128 == (192 & r) &&
                    ((l = ((31 & t) << 6) | (63 & r)), l > 127 && (a = l));
                break;
              case 3:
                (r = e[i + 1]),
                  (n = e[i + 2]),
                  128 == (192 & r) &&
                    128 == (192 & n) &&
                    ((l = ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)),
                    l > 2047 && (l < 55296 || l > 57343) && (a = l));
                break;
              case 4:
                (r = e[i + 1]),
                  (n = e[i + 2]),
                  (s = e[i + 3]),
                  128 == (192 & r) &&
                    128 == (192 & n) &&
                    128 == (192 & s) &&
                    ((l =
                      ((15 & t) << 18) |
                      ((63 & r) << 12) |
                      ((63 & n) << 6) |
                      (63 & s)),
                    l > 65535 && l < 1114112 && (a = l));
            }
          }
          null === a
            ? ((a = 65533), (o = 1))
            : a > 65535 &&
              ((a -= 65536),
              n.push(((a >>> 10) & 1023) | 55296),
              (a = 56320 | (1023 & a))),
            n.push(a),
            (i += o);
        }
        return (function (e) {
          const t = e.length;
          if (t <= O) return String.fromCharCode.apply(String, e);
          let r = "",
            n = 0;
          for (; n < t; )
            r += String.fromCharCode.apply(String, e.slice(n, (n += O)));
          return r;
        })(n);
      }
      (l.TYPED_ARRAY_SUPPORT = (function () {
        try {
          const e = new Uint8Array(1),
            t = {
              foo: function () {
                return 42;
              },
            };
          return (
            Object.setPrototypeOf(t, Uint8Array.prototype),
            Object.setPrototypeOf(e, t),
            42 === e.foo()
          );
        } catch (e) {
          return !1;
        }
      })()),
        l.TYPED_ARRAY_SUPPORT ||
          "undefined" == typeof console ||
          "function" != typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
          ),
        Object.defineProperty(l.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (l.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(l.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (l.isBuffer(this)) return this.byteOffset;
          },
        }),
        (l.poolSize = 8192),
        (l.from = function (e, t, r) {
          return c(e, t, r);
        }),
        Object.setPrototypeOf(l.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(l, Uint8Array),
        (l.alloc = function (e, t, r) {
          return (function (e, t, r) {
            return (
              u(e),
              e <= 0
                ? s(e)
                : void 0 !== t
                ? "string" == typeof r
                  ? s(e).fill(t, r)
                  : s(e).fill(t)
                : s(e)
            );
          })(e, t, r);
        }),
        (l.allocUnsafe = function (e) {
          return d(e);
        }),
        (l.allocUnsafeSlow = function (e) {
          return d(e);
        }),
        (l.isBuffer = function (e) {
          return null != e && !0 === e._isBuffer && e !== l.prototype;
        }),
        (l.compare = function (e, t) {
          if (
            (H(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)),
            H(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)),
            !l.isBuffer(e) || !l.isBuffer(t))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
            );
          if (e === t) return 0;
          let r = e.length,
            n = t.length;
          for (let i = 0, a = Math.min(r, n); i < a; ++i)
            if (e[i] !== t[i]) {
              (r = e[i]), (n = t[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (l.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (l.concat = function (e, t) {
          if (!Array.isArray(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return l.alloc(0);
          let r;
          if (void 0 === t)
            for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
          const n = l.allocUnsafe(t);
          let i = 0;
          for (r = 0; r < e.length; ++r) {
            let t = e[r];
            if (H(t, Uint8Array))
              i + t.length > n.length
                ? (l.isBuffer(t) || (t = l.from(t)), t.copy(n, i))
                : Uint8Array.prototype.set.call(n, t, i);
            else {
              if (!l.isBuffer(t))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers',
                );
              t.copy(n, i);
            }
            i += t.length;
          }
          return n;
        }),
        (l.byteLength = p),
        (l.prototype._isBuffer = !0),
        (l.prototype.swap16 = function () {
          const e = this.length;
          if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (let t = 0; t < e; t += 2) g(this, t, t + 1);
          return this;
        }),
        (l.prototype.swap32 = function () {
          const e = this.length;
          if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (let t = 0; t < e; t += 4)
            g(this, t, t + 3), g(this, t + 1, t + 2);
          return this;
        }),
        (l.prototype.swap64 = function () {
          const e = this.length;
          if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (let t = 0; t < e; t += 8)
            g(this, t, t + 7),
              g(this, t + 1, t + 6),
              g(this, t + 2, t + 5),
              g(this, t + 3, t + 4);
          return this;
        }),
        (l.prototype.toString = function () {
          const e = this.length;
          return 0 === e
            ? ""
            : 0 === arguments.length
            ? E(this, 0, e)
            : y.apply(this, arguments);
        }),
        (l.prototype.toLocaleString = l.prototype.toString),
        (l.prototype.equals = function (e) {
          if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === l.compare(this, e);
        }),
        (l.prototype.inspect = function () {
          let e = "";
          const r = t.h2;
          return (
            (e = this.toString("hex", 0, r)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > r && (e += " ... "),
            "<Buffer " + e + ">"
          );
        }),
        a && (l.prototype[a] = l.prototype.inspect),
        (l.prototype.compare = function (e, t, r, n, i) {
          if (
            (H(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)),
            !l.isBuffer(e))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof e,
            );
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            t < 0 || r > e.length || n < 0 || i > this.length)
          )
            throw new RangeError("out of range index");
          if (n >= i && t >= r) return 0;
          if (n >= i) return -1;
          if (t >= r) return 1;
          if (this === e) return 0;
          let a = (i >>>= 0) - (n >>>= 0),
            o = (r >>>= 0) - (t >>>= 0);
          const s = Math.min(a, o),
            c = this.slice(n, i),
            u = e.slice(t, r);
          for (let e = 0; e < s; ++e)
            if (c[e] !== u[e]) {
              (a = c[e]), (o = u[e]);
              break;
            }
          return a < o ? -1 : o < a ? 1 : 0;
        }),
        (l.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (l.prototype.indexOf = function (e, t, r) {
          return b(this, e, t, r, !0);
        }),
        (l.prototype.lastIndexOf = function (e, t, r) {
          return b(this, e, t, r, !1);
        }),
        (l.prototype.write = function (e, t, r, n) {
          if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
          else if (void 0 === r && "string" == typeof t)
            (n = t), (r = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported",
              );
            (t >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          }
          const i = this.length - t;
          if (
            ((void 0 === r || r > i) && (r = i),
            (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          let a = !1;
          for (;;)
            switch (n) {
              case "hex":
                return B(this, e, t, r);
              case "utf8":
              case "utf-8":
                return w(this, e, t, r);
              case "ascii":
              case "latin1":
              case "binary":
                return _(this, e, t, r);
              case "base64":
                return M(this, e, t, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return S(this, e, t, r);
              default:
                if (a) throw new TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (a = !0);
            }
        }),
        (l.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      const O = 4096;
      function F(e, t, r) {
        let n = "";
        r = Math.min(e.length, r);
        for (let i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
        return n;
      }
      function R(e, t, r) {
        let n = "";
        r = Math.min(e.length, r);
        for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
        return n;
      }
      function j(e, t, r) {
        const n = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
        let i = "";
        for (let n = t; n < r; ++n) i += K[e[n]];
        return i;
      }
      function x(e, t, r) {
        const n = e.slice(t, r);
        let i = "";
        for (let e = 0; e < n.length - 1; e += 2)
          i += String.fromCharCode(n[e] + 256 * n[e + 1]);
        return i;
      }
      function C(e, t, r) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > r)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function T(e, t, r, n, i, a) {
        if (!l.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < a)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw new RangeError("Index out of range");
      }
      function W(e, t, r, n, i) {
        X(t, n, i, e, r, 7);
        let a = Number(t & BigInt(4294967295));
        (e[r++] = a),
          (a >>= 8),
          (e[r++] = a),
          (a >>= 8),
          (e[r++] = a),
          (a >>= 8),
          (e[r++] = a);
        let o = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (
          (e[r++] = o),
          (o >>= 8),
          (e[r++] = o),
          (o >>= 8),
          (e[r++] = o),
          (o >>= 8),
          (e[r++] = o),
          r
        );
      }
      function P(e, t, r, n, i) {
        X(t, n, i, e, r, 7);
        let a = Number(t & BigInt(4294967295));
        (e[r + 7] = a),
          (a >>= 8),
          (e[r + 6] = a),
          (a >>= 8),
          (e[r + 5] = a),
          (a >>= 8),
          (e[r + 4] = a);
        let o = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (
          (e[r + 3] = o),
          (o >>= 8),
          (e[r + 2] = o),
          (o >>= 8),
          (e[r + 1] = o),
          (o >>= 8),
          (e[r] = o),
          r + 8
        );
      }
      function I(e, t, r, n, i, a) {
        if (r + n > e.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      function N(e, t, r, n, a) {
        return (
          (t = +t),
          (r >>>= 0),
          a || I(e, 0, r, 4),
          i.write(e, t, r, n, 23, 4),
          r + 4
        );
      }
      function A(e, t, r, n, a) {
        return (
          (t = +t),
          (r >>>= 0),
          a || I(e, 0, r, 8),
          i.write(e, t, r, n, 52, 8),
          r + 8
        );
      }
      (l.prototype.slice = function (e, t) {
        const r = this.length;
        (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          (t = void 0 === t ? r : ~~t) < 0
            ? (t += r) < 0 && (t = 0)
            : t > r && (t = r),
          t < e && (t = e);
        const n = this.subarray(e, t);
        return Object.setPrototypeOf(n, l.prototype), n;
      }),
        (l.prototype.readUintLE = l.prototype.readUIntLE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || C(e, t, this.length);
            let n = this[e],
              i = 1,
              a = 0;
            for (; ++a < t && (i *= 256); ) n += this[e + a] * i;
            return n;
          }),
        (l.prototype.readUintBE = l.prototype.readUIntBE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || C(e, t, this.length);
            let n = this[e + --t],
              i = 1;
            for (; t > 0 && (i *= 256); ) n += this[e + --t] * i;
            return n;
          }),
        (l.prototype.readUint8 = l.prototype.readUInt8 =
          function (e, t) {
            return (e >>>= 0), t || C(e, 1, this.length), this[e];
          }),
        (l.prototype.readUint16LE = l.prototype.readUInt16LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || C(e, 2, this.length),
              this[e] | (this[e + 1] << 8)
            );
          }),
        (l.prototype.readUint16BE = l.prototype.readUInt16BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || C(e, 2, this.length),
              (this[e] << 8) | this[e + 1]
            );
          }),
        (l.prototype.readUint32LE = l.prototype.readUInt32LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || C(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            );
          }),
        (l.prototype.readUint32BE = l.prototype.readUInt32BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || C(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
        (l.prototype.readBigUInt64LE = Q(function (e) {
          L((e >>>= 0), "offset");
          const t = this[e],
            r = this[e + 7];
          (void 0 !== t && void 0 !== r) || q(e, this.length - 8);
          const n =
              t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
            i = this[++e] + 256 * this[++e] + 65536 * this[++e] + r * 2 ** 24;
          return BigInt(n) + (BigInt(i) << BigInt(32));
        })),
        (l.prototype.readBigUInt64BE = Q(function (e) {
          L((e >>>= 0), "offset");
          const t = this[e],
            r = this[e + 7];
          (void 0 !== t && void 0 !== r) || q(e, this.length - 8);
          const n =
              t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
            i = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r;
          return (BigInt(n) << BigInt(32)) + BigInt(i);
        })),
        (l.prototype.readIntLE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || C(e, t, this.length);
          let n = this[e],
            i = 1,
            a = 0;
          for (; ++a < t && (i *= 256); ) n += this[e + a] * i;
          return (i *= 128), n >= i && (n -= Math.pow(2, 8 * t)), n;
        }),
        (l.prototype.readIntBE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || C(e, t, this.length);
          let n = t,
            i = 1,
            a = this[e + --n];
          for (; n > 0 && (i *= 256); ) a += this[e + --n] * i;
          return (i *= 128), a >= i && (a -= Math.pow(2, 8 * t)), a;
        }),
        (l.prototype.readInt8 = function (e, t) {
          return (
            (e >>>= 0),
            t || C(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (l.prototype.readInt16LE = function (e, t) {
          (e >>>= 0), t || C(e, 2, this.length);
          const r = this[e] | (this[e + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (l.prototype.readInt16BE = function (e, t) {
          (e >>>= 0), t || C(e, 2, this.length);
          const r = this[e + 1] | (this[e] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (l.prototype.readInt32LE = function (e, t) {
          return (
            (e >>>= 0),
            t || C(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (l.prototype.readInt32BE = function (e, t) {
          return (
            (e >>>= 0),
            t || C(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (l.prototype.readBigInt64LE = Q(function (e) {
          L((e >>>= 0), "offset");
          const t = this[e],
            r = this[e + 7];
          (void 0 !== t && void 0 !== r) || q(e, this.length - 8);
          const n =
            this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24);
          return (
            (BigInt(n) << BigInt(32)) +
            BigInt(
              t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
            )
          );
        })),
        (l.prototype.readBigInt64BE = Q(function (e) {
          L((e >>>= 0), "offset");
          const t = this[e],
            r = this[e + 7];
          (void 0 !== t && void 0 !== r) || q(e, this.length - 8);
          const n = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
          return (
            (BigInt(n) << BigInt(32)) +
            BigInt(
              this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r,
            )
          );
        })),
        (l.prototype.readFloatLE = function (e, t) {
          return (
            (e >>>= 0), t || C(e, 4, this.length), i.read(this, e, !0, 23, 4)
          );
        }),
        (l.prototype.readFloatBE = function (e, t) {
          return (
            (e >>>= 0), t || C(e, 4, this.length), i.read(this, e, !1, 23, 4)
          );
        }),
        (l.prototype.readDoubleLE = function (e, t) {
          return (
            (e >>>= 0), t || C(e, 8, this.length), i.read(this, e, !0, 52, 8)
          );
        }),
        (l.prototype.readDoubleBE = function (e, t) {
          return (
            (e >>>= 0), t || C(e, 8, this.length), i.read(this, e, !1, 52, 8)
          );
        }),
        (l.prototype.writeUintLE = l.prototype.writeUIntLE =
          function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              T(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            }
            let i = 1,
              a = 0;
            for (this[t] = 255 & e; ++a < r && (i *= 256); )
              this[t + a] = (e / i) & 255;
            return t + r;
          }),
        (l.prototype.writeUintBE = l.prototype.writeUIntBE =
          function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              T(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            }
            let i = r - 1,
              a = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); )
              this[t + i] = (e / a) & 255;
            return t + r;
          }),
        (l.prototype.writeUint8 = l.prototype.writeUInt8 =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || T(this, e, t, 1, 255, 0),
              (this[t] = 255 & e),
              t + 1
            );
          }),
        (l.prototype.writeUint16LE = l.prototype.writeUInt16LE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || T(this, e, t, 2, 65535, 0),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            );
          }),
        (l.prototype.writeUint16BE = l.prototype.writeUInt16BE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || T(this, e, t, 2, 65535, 0),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            );
          }),
        (l.prototype.writeUint32LE = l.prototype.writeUInt32LE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || T(this, e, t, 4, 4294967295, 0),
              (this[t + 3] = e >>> 24),
              (this[t + 2] = e >>> 16),
              (this[t + 1] = e >>> 8),
              (this[t] = 255 & e),
              t + 4
            );
          }),
        (l.prototype.writeUint32BE = l.prototype.writeUInt32BE =
          function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || T(this, e, t, 4, 4294967295, 0),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
        (l.prototype.writeBigUInt64LE = Q(function (e, t = 0) {
          return W(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (l.prototype.writeBigUInt64BE = Q(function (e, t = 0) {
          return P(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (l.prototype.writeIntLE = function (e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            const n = Math.pow(2, 8 * r - 1);
            T(this, e, t, r, n - 1, -n);
          }
          let i = 0,
            a = 1,
            o = 0;
          for (this[t] = 255 & e; ++i < r && (a *= 256); )
            e < 0 && 0 === o && 0 !== this[t + i - 1] && (o = 1),
              (this[t + i] = (((e / a) >> 0) - o) & 255);
          return t + r;
        }),
        (l.prototype.writeIntBE = function (e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            const n = Math.pow(2, 8 * r - 1);
            T(this, e, t, r, n - 1, -n);
          }
          let i = r - 1,
            a = 1,
            o = 0;
          for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); )
            e < 0 && 0 === o && 0 !== this[t + i + 1] && (o = 1),
              (this[t + i] = (((e / a) >> 0) - o) & 255);
          return t + r;
        }),
        (l.prototype.writeInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || T(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (l.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || T(this, e, t, 2, 32767, -32768),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          );
        }),
        (l.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || T(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          );
        }),
        (l.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || T(this, e, t, 4, 2147483647, -2147483648),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24),
            t + 4
          );
        }),
        (l.prototype.writeInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || T(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
          );
        }),
        (l.prototype.writeBigInt64LE = Q(function (e, t = 0) {
          return W(
            this,
            e,
            t,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff"),
          );
        })),
        (l.prototype.writeBigInt64BE = Q(function (e, t = 0) {
          return P(
            this,
            e,
            t,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff"),
          );
        })),
        (l.prototype.writeFloatLE = function (e, t, r) {
          return N(this, e, t, !0, r);
        }),
        (l.prototype.writeFloatBE = function (e, t, r) {
          return N(this, e, t, !1, r);
        }),
        (l.prototype.writeDoubleLE = function (e, t, r) {
          return A(this, e, t, !0, r);
        }),
        (l.prototype.writeDoubleBE = function (e, t, r) {
          return A(this, e, t, !1, r);
        }),
        (l.prototype.copy = function (e, t, r, n) {
          if (!l.isBuffer(e))
            throw new TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r);
          const i = n - r;
          return (
            this === e && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(t, r, n)
              : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
            i
          );
        }),
        (l.prototype.fill = function (e, t, r, n) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((n = t), (t = 0), (r = this.length))
                : "string" == typeof r && ((n = r), (r = this.length)),
              void 0 !== n && "string" != typeof n)
            )
              throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !l.isEncoding(n))
              throw new TypeError("Unknown encoding: " + n);
            if (1 === e.length) {
              const t = e.charCodeAt(0);
              (("utf8" === n && t < 128) || "latin1" === n) && (e = t);
            }
          } else
            "number" == typeof e
              ? (e &= 255)
              : "boolean" == typeof e && (e = Number(e));
          if (t < 0 || this.length < t || this.length < r)
            throw new RangeError("Out of range index");
          if (r <= t) return this;
          let i;
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (i = t; i < r; ++i) this[i] = e;
          else {
            const a = l.isBuffer(e) ? e : l.from(e, n),
              o = a.length;
            if (0 === o)
              throw new TypeError(
                'The value "' + e + '" is invalid for argument "value"',
              );
            for (i = 0; i < r - t; ++i) this[i + t] = a[i % o];
          }
          return this;
        });
      const D = {};
      function U(e, t, r) {
        D[e] = class extends r {
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: t.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${e}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return e;
          }
          set code(e) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: e,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      function k(e) {
        let t = "",
          r = e.length;
        const n = "-" === e[0] ? 1 : 0;
        for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
        return `${e.slice(0, r)}${t}`;
      }
      function X(e, t, r, n, i, a) {
        if (e > r || e < t) {
          const n = "bigint" == typeof t ? "n" : "";
          let i;
          throw (
            ((i =
              a > 3
                ? 0 === t || t === BigInt(0)
                  ? `>= 0${n} and < 2${n} ** ${8 * (a + 1)}${n}`
                  : `>= -(2${n} ** ${8 * (a + 1) - 1}${n}) and < 2 ** ${
                      8 * (a + 1) - 1
                    }${n}`
                : `>= ${t}${n} and <= ${r}${n}`),
            new D.ERR_OUT_OF_RANGE("value", i, e))
          );
        }
        !(function (e, t, r) {
          L(t, "offset"),
            (void 0 !== e[t] && void 0 !== e[t + r]) ||
              q(t, e.length - (r + 1));
        })(n, i, a);
      }
      function L(e, t) {
        if ("number" != typeof e)
          throw new D.ERR_INVALID_ARG_TYPE(t, "number", e);
      }
      function q(e, t, r) {
        if (Math.floor(e) !== e)
          throw (
            (L(e, r), new D.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
          );
        if (t < 0) throw new D.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new D.ERR_OUT_OF_RANGE(
          r || "offset",
          `>= ${r ? 1 : 0} and <= ${t}`,
          e,
        );
      }
      U(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (e) {
          return e
            ? `${e} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError,
      ),
        U(
          "ERR_INVALID_ARG_TYPE",
          function (e, t) {
            return `The "${e}" argument must be of type number. Received type ${typeof t}`;
          },
          TypeError,
        ),
        U(
          "ERR_OUT_OF_RANGE",
          function (e, t, r) {
            let n = `The value of "${e}" is out of range.`,
              i = r;
            return (
              Number.isInteger(r) && Math.abs(r) > 2 ** 32
                ? (i = k(String(r)))
                : "bigint" == typeof r &&
                  ((i = String(r)),
                  (r > BigInt(2) ** BigInt(32) ||
                    r < -(BigInt(2) ** BigInt(32))) &&
                    (i = k(i)),
                  (i += "n")),
              (n += ` It must be ${t}. Received ${i}`),
              n
            );
          },
          RangeError,
        );
      const Z = /[^+/0-9A-Za-z-_]/g;
      function $(e, t) {
        let r;
        t = t || 1 / 0;
        const n = e.length;
        let i = null;
        const a = [];
        for (let o = 0; o < n; ++o) {
          if (((r = e.charCodeAt(o)), r > 55295 && r < 57344)) {
            if (!i) {
              if (r > 56319) {
                (t -= 3) > -1 && a.push(239, 191, 189);
                continue;
              }
              if (o + 1 === n) {
                (t -= 3) > -1 && a.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && a.push(239, 191, 189), (i = r);
              continue;
            }
            r = 65536 + (((i - 55296) << 10) | (r - 56320));
          } else i && (t -= 3) > -1 && a.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((t -= 1) < 0) break;
            a.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            a.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            a.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            a.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128,
            );
          }
        }
        return a;
      }
      function V(e) {
        return n.toByteArray(
          (function (e) {
            if ((e = (e = e.split("=")[0]).trim().replace(Z, "")).length < 2)
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e),
        );
      }
      function Y(e, t, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
          t[i + r] = e[i];
        return i;
      }
      function H(e, t) {
        return (
          e instanceof t ||
          (null != e &&
            null != e.constructor &&
            null != e.constructor.name &&
            e.constructor.name === t.name)
        );
      }
      function G(e) {
        return e != e;
      }
      const K = (function () {
        const e = "0123456789abcdef",
          t = new Array(256);
        for (let r = 0; r < 16; ++r) {
          const n = 16 * r;
          for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
        }
        return t;
      })();
      function Q(e) {
        return "undefined" == typeof BigInt ? J : e;
      }
      function J() {
        throw new Error("BigInt not supported");
      }
    },
    29098: (e, t) => {
      "use strict";
      (t.byteLength = function (e) {
        var t = s(e),
          r = t[0],
          n = t[1];
        return (3 * (r + n)) / 4 - n;
      }),
        (t.toByteArray = function (e) {
          var t,
            r,
            a = s(e),
            o = a[0],
            l = a[1],
            c = new i(
              (function (e, t, r) {
                return (3 * (t + r)) / 4 - r;
              })(0, o, l),
            ),
            u = 0,
            d = l > 0 ? o - 4 : o;
          for (r = 0; r < d; r += 4)
            (t =
              (n[e.charCodeAt(r)] << 18) |
              (n[e.charCodeAt(r + 1)] << 12) |
              (n[e.charCodeAt(r + 2)] << 6) |
              n[e.charCodeAt(r + 3)]),
              (c[u++] = (t >> 16) & 255),
              (c[u++] = (t >> 8) & 255),
              (c[u++] = 255 & t);
          2 === l &&
            ((t = (n[e.charCodeAt(r)] << 2) | (n[e.charCodeAt(r + 1)] >> 4)),
            (c[u++] = 255 & t));
          1 === l &&
            ((t =
              (n[e.charCodeAt(r)] << 10) |
              (n[e.charCodeAt(r + 1)] << 4) |
              (n[e.charCodeAt(r + 2)] >> 2)),
            (c[u++] = (t >> 8) & 255),
            (c[u++] = 255 & t));
          return c;
        }),
        (t.fromByteArray = function (e) {
          for (
            var t, n = e.length, i = n % 3, a = [], o = 16383, s = 0, c = n - i;
            s < c;
            s += o
          )
            a.push(l(e, s, s + o > c ? c : s + o));
          1 === i
            ? ((t = e[n - 1]), a.push(r[t >> 2] + r[(t << 4) & 63] + "=="))
            : 2 === i &&
              ((t = (e[n - 2] << 8) + e[n - 1]),
              a.push(r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "="));
          return a.join("");
        });
      for (
        var r = [],
          n = [],
          i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          o = 0;
        o < 64;
        ++o
      )
        (r[o] = a[o]), (n[a.charCodeAt(o)] = o);
      function s(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
      }
      function l(e, t, n) {
        for (var i, a, o = [], s = t; s < n; s += 3)
          (i =
            ((e[s] << 16) & 16711680) +
            ((e[s + 1] << 8) & 65280) +
            (255 & e[s + 2])),
            o.push(
              r[((a = i) >> 18) & 63] +
                r[(a >> 12) & 63] +
                r[(a >> 6) & 63] +
                r[63 & a],
            );
        return o.join("");
      }
      (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
    },
    4215: (e, t) => {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
      (t.read = function (e, t, r, n, i) {
        var a,
          o,
          s = 8 * i - n - 1,
          l = (1 << s) - 1,
          c = l >> 1,
          u = -7,
          d = r ? i - 1 : 0,
          f = r ? -1 : 1,
          m = e[t + d];
        for (
          d += f, a = m & ((1 << -u) - 1), m >>= -u, u += s;
          u > 0;
          a = 256 * a + e[t + d], d += f, u -= 8
        );
        for (
          o = a & ((1 << -u) - 1), a >>= -u, u += n;
          u > 0;
          o = 256 * o + e[t + d], d += f, u -= 8
        );
        if (0 === a) a = 1 - c;
        else {
          if (a === l) return o ? NaN : (1 / 0) * (m ? -1 : 1);
          (o += Math.pow(2, n)), (a -= c);
        }
        return (m ? -1 : 1) * o * Math.pow(2, a - n);
      }),
        (t.write = function (e, t, r, n, i, a) {
          var o,
            s,
            l,
            c = 8 * a - i - 1,
            u = (1 << c) - 1,
            d = u >> 1,
            f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            m = n ? 0 : a - 1,
            h = n ? 1 : -1,
            p = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            t = Math.abs(t),
              isNaN(t) || t === 1 / 0
                ? ((s = isNaN(t) ? 1 : 0), (o = u))
                : ((o = Math.floor(Math.log(t) / Math.LN2)),
                  t * (l = Math.pow(2, -o)) < 1 && (o--, (l *= 2)),
                  (t += o + d >= 1 ? f / l : f * Math.pow(2, 1 - d)) * l >= 2 &&
                    (o++, (l /= 2)),
                  o + d >= u
                    ? ((s = 0), (o = u))
                    : o + d >= 1
                    ? ((s = (t * l - 1) * Math.pow(2, i)), (o += d))
                    : ((s = t * Math.pow(2, d - 1) * Math.pow(2, i)), (o = 0)));
            i >= 8;
            e[r + m] = 255 & s, m += h, s /= 256, i -= 8
          );
          for (
            o = (o << i) | s, c += i;
            c > 0;
            e[r + m] = 255 & o, m += h, o /= 256, c -= 8
          );
          e[r + m - h] |= 128 * p;
        });
    },
    76711: (e, t, r) => {
      "use strict";
      r.d(t, { H: () => En, A: () => qn });
      const n = (e, t, r = !1) => {
          if (!Array.isArray(e) || !Array.isArray(t))
            throw new Error("Both arguments should be arrays.");
          const n = e.length,
            i = t.length,
            a = new Array(n + i);
          if (r) {
            for (let e = 0; e < i; e++) a[e] = t[i - e - 1];
            for (let t = 0; t < n; t++) a[t + i] = e[t];
            return a;
          }
          for (let t = 0; t < n; t++) a[t] = e[t];
          for (let e = 0; e < i; e++) a[e + n] = t[e];
          return a;
        },
        i = (e, t = new Map()) => {
          if ("object" != typeof e || null === e) return !1;
          if (t.has(e)) return !0;
          if ((t.set(e, !0), Array.isArray(e))) {
            for (let r = 0; r < e.length; r++) if (i(e[r], t)) return !0;
            return !1;
          }
          for (const r in e) if (i(e[r], t)) return !0;
          return !1;
        },
        a = (e, t, r, n = 1 / 0) => {
          if (!e || "object" != typeof e) return JSON.stringify(e, t, r);
          const i =
            n < 1
              ? '"..."'
              : Array.isArray(e)
              ? `[${e.map((e) => a(e, t, r, n - 1)).join(",")}]`
              : `{${Object.keys(e)
                  .map((i) => `"${i}": ${a(e[i], t, r, n - 1)}`)
                  .join(", ")}}`;
          return JSON.stringify(JSON.parse(i), t, r);
        },
        o = (e, t = 1 / 0, r = !1) =>
          Number.isNaN(e) || null === e
            ? "null"
            : Array.isArray(e) || "object" == typeof e
            ? a(e, void 0, r ? 1 : void 0, t)
            : a(e),
        s = (e) =>
          "boolean" == typeof e
            ? 0
            : "number" == typeof e
            ? 1
            : "string" == typeof e
            ? 2
            : null === e
            ? 3
            : Array.isArray(e)
            ? 4
            : "object" == typeof e
            ? 5
            : -1,
        l = (e, t, r) => {
          const n = s(e),
            i = s(t);
          if (n !== i) return n - i;
          if (
            (null === e && null === t) ||
            (Array.isArray(e) && Array.isArray(t)) ||
            (5 === n && 5 === i)
          )
            return 0;
          switch (typeof e) {
            case "number":
              return e - t;
            case "string":
              return (
                (null == r ? void 0 : r.ignoreCase) &&
                  ((e = e.toLowerCase()), (t = t.toLowerCase())),
                e < t ? -1 : e > t ? 1 : 0
              );
            case "boolean":
              return +e - +t;
          }
          return 0;
        },
        c = (e) =>
          Array.isArray(e) ? "array" : null === e ? "null" : typeof e,
        u = (e, t, r, n, i, a, s, c) => {
          const u = { ignoreCase: c.ignoreCase },
            d = o(i, c.maxDepth, !0).split("\n"),
            f = o(a, c.maxDepth, !0).split("\n");
          if (0 !== l(i, a, u))
            if (c.showModifications) {
              const i = Math.max(d.length, f.length);
              for (let e = d.length; e < i; e++) d.push("");
              for (let e = f.length; e < i; e++) f.push("");
              e.push({
                level: s,
                type: "modify",
                text: r ? `"${r}": ${d[0]}` : d[0],
              });
              for (let t = 1; t < d.length; t++) {
                var m, h;
                e.push({
                  level:
                    s +
                    ((null == (m = d[t].match(/^\s+/)) || null == (h = m[0])
                      ? void 0
                      : h.length) || 0),
                  type: "modify",
                  text: d[t].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              }
              for (let t = d.length; t < i; t++)
                e.push({ level: s, type: "equal", text: "" });
              t.push({
                level: s,
                type: "modify",
                text: n ? `"${n}": ${f[0]}` : f[0],
              });
              for (let e = 1; e < f.length; e++) {
                var p, y;
                t.push({
                  level:
                    s +
                    ((null == (p = f[e].match(/^\s+/)) || null == (y = p[0])
                      ? void 0
                      : y.length) || 0),
                  type: "modify",
                  text: f[e].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              }
              for (let e = f.length; e < i; e++)
                t.push({ level: s, type: "equal", text: "" });
            } else {
              e.push({
                level: s,
                type: "remove",
                text: r ? `"${r}": ${d[0]}` : d[0],
              });
              for (let t = 1; t < d.length; t++) {
                var g, b;
                e.push({
                  level:
                    s +
                    ((null == (g = d[t].match(/^\s+/)) || null == (b = g[0])
                      ? void 0
                      : b.length) || 0),
                  type: "remove",
                  text: d[t].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              }
              for (let t = 0; t < f.length; t++)
                e.push({ level: s, type: "equal", text: "" });
              for (let e = 0; e < d.length; e++)
                t.push({ level: s, type: "equal", text: "" });
              t.push({
                level: s,
                type: "add",
                text: n ? `"${n}": ${f[0]}` : f[0],
              });
              for (let e = 1; e < f.length; e++) {
                var v, B;
                t.push({
                  level:
                    s +
                    ((null == (v = f[e].match(/^\s+/)) || null == (B = v[0])
                      ? void 0
                      : B.length) || 0),
                  type: "add",
                  text: f[e].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              }
            }
          else {
            const i = Math.max(d.length, f.length);
            for (let e = d.length; e < i; e++) d.push("");
            for (let e = f.length; e < i; e++) f.push("");
            e.push({
              level: s,
              type: "equal",
              text: r ? `"${r}": ${d[0]}` : d[0],
            });
            for (let t = 1; t < d.length; t++) {
              var w, _;
              e.push({
                level:
                  s +
                  ((null == (w = d[t].match(/^\s+/)) || null == (_ = w[0])
                    ? void 0
                    : _.length) || 0),
                type: "equal",
                text: d[t].replace(/^\s+/, "").replace(/,$/g, ""),
              });
            }
            t.push({
              level: s,
              type: "equal",
              text: n ? `"${n}": ${f[0]}` : f[0],
            });
            for (let e = 1; e < f.length; e++) {
              var M, S;
              t.push({
                level:
                  s +
                  ((null == (M = f[e].match(/^\s+/)) || null == (S = M[0])
                    ? void 0
                    : S.length) || 0),
                type: "equal",
                text: f[e].replace(/^\s+/, "").replace(/,$/g, ""),
              });
            }
          }
        },
        d = (e, t) =>
          e.sort((e, r) => l(e, r, { ignoreCase: t.ignoreCaseForKey })),
        f = (e, t, r = 1, i, o) => {
          if (r > (i.maxDepth || 1 / 0))
            return [
              [{ level: r, type: "equal", text: "..." }],
              [{ level: r, type: "equal", text: "..." }],
            ];
          let s = [],
            m = [];
          if ((null === e && null === t) || (void 0 === e && void 0 === t))
            return [s, m];
          if (null == e) {
            const e = a(t, void 0, 1).split("\n");
            for (let t = 0; t < e.length; t++) {
              var h, p;
              s.push({ level: r, type: "equal", text: "" }),
                m.push({
                  level:
                    r +
                    ((null == (h = e[t].match(/^\s+/)) || null == (p = h[0])
                      ? void 0
                      : p.length) || 0),
                  type: "add",
                  text: e[t].replace(/^\s+/, "").replace(/,$/g, ""),
                });
            }
            return [s, m];
          }
          if (null == t) {
            const t = a(e, void 0, 1).split("\n");
            for (let e = 0; e < t.length; e++) {
              var y, g;
              s.push({
                level:
                  r +
                  ((null == (y = t[e].match(/^\s+/)) || null == (g = y[0])
                    ? void 0
                    : g.length) || 0),
                type: "remove",
                text: t[e].replace(/^\s+/, "").replace(/,$/g, ""),
              }),
                m.push({ level: r, type: "equal", text: "" });
            }
            return [s, m];
          }
          const b = Object.keys(e),
            v = Object.keys(t);
          d(b, i), d(v, i);
          const B = { ignoreCase: i.ignoreCaseForKey };
          for (i.ignoreCase; b.length || v.length; ) {
            const d = b[0],
              h = v[0],
              p = l(d, h, B);
            if (0 === p)
              if (c(e[d]) !== c(t[h])) u(s, m, d, h, e[d], t[h], r, i);
              else if (Array.isArray(e[d])) {
                const a = [...e[d]],
                  l = [...t[h]],
                  [c, u] = o(a, l, d, h, r, i, [], []);
                (s = n(s, c)), (m = n(m, u));
              } else if (null === e[d])
                s.push({ level: r, type: "equal", text: `"${d}": null` }),
                  m.push({ level: r, type: "equal", text: `"${h}": null` });
              else if ("object" == typeof e[d]) {
                const a = f(e[d], t[h], r + 1, i, o);
                s.push({ level: r, type: "equal", text: `"${d}": {` }),
                  (s = n(s, a[0])),
                  s.push({ level: r, type: "equal", text: "}" }),
                  m.push({ level: r, type: "equal", text: `"${h}": {` }),
                  (m = n(m, a[1])),
                  m.push({ level: r, type: "equal", text: "}" });
              } else u(s, m, d, h, e[d], t[h], r, i);
            else if (b.length && v.length)
              if (d < h) {
                const t = a(e[d], void 0, 1).split("\n");
                for (let e = 0; e < t.length; e++) {
                  var w, _;
                  const n = t[e].replace(/^\s+/, "").replace(/,$/g, "");
                  s.push({
                    level:
                      r +
                      ((null == (w = t[e].match(/^\s+/)) || null == (_ = w[0])
                        ? void 0
                        : _.length) || 0),
                    type: "remove",
                    text: e ? n : `"${d}": ${n}`,
                  }),
                    m.push({ level: r, type: "equal", text: "" });
                }
              } else {
                const e = a(t[h], void 0, 1).split("\n");
                for (let t = 0; t < e.length; t++) {
                  var M, S;
                  const n = e[t].replace(/^\s+/, "").replace(/,$/g, "");
                  s.push({ level: r, type: "equal", text: "" }),
                    m.push({
                      level:
                        r +
                        ((null == (M = e[t].match(/^\s+/)) || null == (S = M[0])
                          ? void 0
                          : S.length) || 0),
                      type: "add",
                      text: t ? n : `"${h}": ${n}`,
                    });
                }
              }
            else if (b.length) {
              const t = a(e[d], void 0, 1).split("\n");
              for (let e = 0; e < t.length; e++) {
                var z, E;
                const n = t[e].replace(/^\s+/, "").replace(/,$/g, "");
                s.push({
                  level:
                    r +
                    ((null == (z = t[e].match(/^\s+/)) || null == (E = z[0])
                      ? void 0
                      : E.length) || 0),
                  type: "remove",
                  text: e ? n : `"${d}": ${n}`,
                }),
                  m.push({ level: r, type: "equal", text: "" });
              }
            } else if (v.length) {
              const e = a(t[h], void 0, 1).split("\n");
              for (let t = 0; t < e.length; t++) {
                var O, F;
                const n = e[t].replace(/^\s+/, "").replace(/,$/g, "");
                s.push({ level: r, type: "equal", text: "" }),
                  m.push({
                    level:
                      r +
                      ((null == (O = e[t].match(/^\s+/)) || null == (F = O[0])
                        ? void 0
                        : F.length) || 0),
                    type: "add",
                    text: t ? n : `"${h}": ${n}`,
                  });
              }
            }
            d
              ? h
                ? 0 === p
                  ? (b.shift(), v.shift())
                  : p < 0
                  ? b.shift()
                  : v.shift()
                : b.shift()
              : v.shift();
          }
          if (s.length !== m.length)
            throw new Error(
              "Diff error: length not match for left & right, please report a bug with your data.",
            );
          return [s, m];
        };
      var m = function () {
        (this.__data__ = []), (this.size = 0);
      };
      var h = function (e, t) {
          return e === t || (e != e && t != t);
        },
        p = h;
      var y = function (e, t) {
          for (var r = e.length; r--; ) if (p(e[r][0], t)) return r;
          return -1;
        },
        g = y,
        b = Array.prototype.splice;
      var v = y;
      var B = y;
      var w = y;
      var _ = m,
        M = function (e) {
          var t = this.__data__,
            r = g(t, e);
          return (
            !(r < 0) &&
            (r == t.length - 1 ? t.pop() : b.call(t, r, 1), --this.size, !0)
          );
        },
        S = function (e) {
          var t = this.__data__,
            r = v(t, e);
          return r < 0 ? void 0 : t[r][1];
        },
        z = function (e) {
          return B(this.__data__, e) > -1;
        },
        E = function (e, t) {
          var r = this.__data__,
            n = w(r, e);
          return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
        };
      function O(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (O.prototype.clear = _),
        (O.prototype.delete = M),
        (O.prototype.get = S),
        (O.prototype.has = z),
        (O.prototype.set = E);
      var F = O,
        R = F;
      var j = function () {
        (this.__data__ = new R()), (this.size = 0);
      };
      var x = function (e) {
        var t = this.__data__,
          r = t.delete(e);
        return (this.size = t.size), r;
      };
      var C = function (e) {
        return this.__data__.get(e);
      };
      var T = function (e) {
          return this.__data__.has(e);
        },
        W =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== r.g
            ? r.g
            : "undefined" != typeof self
            ? self
            : {},
        P = "object" == typeof W && W && W.Object === Object && W,
        I = P,
        N = "object" == typeof self && self && self.Object === Object && self,
        A = I || N || Function("return this")(),
        D = A.Symbol,
        U = D,
        k = Object.prototype,
        X = k.hasOwnProperty,
        L = k.toString,
        q = U ? U.toStringTag : void 0;
      var Z = function (e) {
          var t = X.call(e, q),
            r = e[q];
          try {
            e[q] = void 0;
            var n = !0;
          } catch (e) {}
          var i = L.call(e);
          return n && (t ? (e[q] = r) : delete e[q]), i;
        },
        $ = Object.prototype.toString;
      var V = Z,
        Y = function (e) {
          return $.call(e);
        },
        H = D ? D.toStringTag : void 0;
      var G = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : H && H in Object(e)
          ? V(e)
          : Y(e);
      };
      var K = function (e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        },
        Q = G,
        J = K;
      var ee,
        te = function (e) {
          if (!J(e)) return !1;
          var t = Q(e);
          return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          );
        },
        re = A["__core-js_shared__"],
        ne = (ee = /[^.]+$/.exec((re && re.keys && re.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + ee
          : "";
      var ie = function (e) {
          return !!ne && ne in e;
        },
        ae = Function.prototype.toString;
      var oe = function (e) {
          if (null != e) {
            try {
              return ae.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        },
        se = te,
        le = ie,
        ce = K,
        ue = oe,
        de = /^\[object .+?Constructor\]$/,
        fe = Function.prototype,
        me = Object.prototype,
        he = fe.toString,
        pe = me.hasOwnProperty,
        ye = RegExp(
          "^" +
            he
              .call(pe)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        );
      var ge = function (e) {
          return !(!ce(e) || le(e)) && (se(e) ? ye : de).test(ue(e));
        },
        be = function (e, t) {
          return null == e ? void 0 : e[t];
        };
      var ve = function (e, t) {
          var r = be(e, t);
          return ge(r) ? r : void 0;
        },
        Be = ve(A, "Map"),
        we = ve(Object, "create"),
        _e = we;
      var Me = function () {
        (this.__data__ = _e ? _e(null) : {}), (this.size = 0);
      };
      var Se = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        },
        ze = we,
        Ee = Object.prototype.hasOwnProperty;
      var Oe = function (e) {
          var t = this.__data__;
          if (ze) {
            var r = t[e];
            return "__lodash_hash_undefined__" === r ? void 0 : r;
          }
          return Ee.call(t, e) ? t[e] : void 0;
        },
        Fe = we,
        Re = Object.prototype.hasOwnProperty;
      var je = we;
      var xe = Me,
        Ce = Se,
        Te = Oe,
        We = function (e) {
          var t = this.__data__;
          return Fe ? void 0 !== t[e] : Re.call(t, e);
        },
        Pe = function (e, t) {
          var r = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (r[e] = je && void 0 === t ? "__lodash_hash_undefined__" : t),
            this
          );
        };
      function Ie(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (Ie.prototype.clear = xe),
        (Ie.prototype.delete = Ce),
        (Ie.prototype.get = Te),
        (Ie.prototype.has = We),
        (Ie.prototype.set = Pe);
      var Ne = Ie,
        Ae = F,
        De = Be;
      var Ue = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
      var ke = function (e, t) {
          var r = e.__data__;
          return Ue(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
        },
        Xe = ke;
      var Le = ke;
      var qe = ke;
      var Ze = ke;
      var $e = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new Ne(),
              map: new (De || Ae)(),
              string: new Ne(),
            });
        },
        Ve = function (e) {
          var t = Xe(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        },
        Ye = function (e) {
          return Le(this, e).get(e);
        },
        He = function (e) {
          return qe(this, e).has(e);
        },
        Ge = function (e, t) {
          var r = Ze(this, e),
            n = r.size;
          return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
        };
      function Ke(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (Ke.prototype.clear = $e),
        (Ke.prototype.delete = Ve),
        (Ke.prototype.get = Ye),
        (Ke.prototype.has = He),
        (Ke.prototype.set = Ge);
      var Qe = Ke,
        Je = F,
        et = Be,
        tt = Qe;
      var rt = F,
        nt = j,
        it = x,
        at = C,
        ot = T,
        st = function (e, t) {
          var r = this.__data__;
          if (r instanceof Je) {
            var n = r.__data__;
            if (!et || n.length < 199)
              return n.push([e, t]), (this.size = ++r.size), this;
            r = this.__data__ = new tt(n);
          }
          return r.set(e, t), (this.size = r.size), this;
        };
      function lt(e) {
        var t = (this.__data__ = new rt(e));
        this.size = t.size;
      }
      (lt.prototype.clear = nt),
        (lt.prototype.delete = it),
        (lt.prototype.get = at),
        (lt.prototype.has = ot),
        (lt.prototype.set = st);
      var ct = lt;
      var ut = Qe,
        dt = function (e) {
          return this.__data__.set(e, "__lodash_hash_undefined__"), this;
        },
        ft = function (e) {
          return this.__data__.has(e);
        };
      function mt(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.__data__ = new ut(); ++t < r; ) this.add(e[t]);
      }
      (mt.prototype.add = mt.prototype.push = dt), (mt.prototype.has = ft);
      var ht = mt,
        pt = function (e, t) {
          for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
            if (t(e[r], r, e)) return !0;
          return !1;
        },
        yt = function (e, t) {
          return e.has(t);
        };
      var gt = function (e, t, r, n, i, a) {
        var o = 1 & r,
          s = e.length,
          l = t.length;
        if (s != l && !(o && l > s)) return !1;
        var c = a.get(e),
          u = a.get(t);
        if (c && u) return c == t && u == e;
        var d = -1,
          f = !0,
          m = 2 & r ? new ht() : void 0;
        for (a.set(e, t), a.set(t, e); ++d < s; ) {
          var h = e[d],
            p = t[d];
          if (n) var y = o ? n(p, h, d, t, e, a) : n(h, p, d, e, t, a);
          if (void 0 !== y) {
            if (y) continue;
            f = !1;
            break;
          }
          if (m) {
            if (
              !pt(t, function (e, t) {
                if (!yt(m, t) && (h === e || i(h, e, r, n, a)))
                  return m.push(t);
              })
            ) {
              f = !1;
              break;
            }
          } else if (h !== p && !i(h, p, r, n, a)) {
            f = !1;
            break;
          }
        }
        return a.delete(e), a.delete(t), f;
      };
      var bt = A.Uint8Array,
        vt = h,
        Bt = gt,
        wt = function (e) {
          var t = -1,
            r = Array(e.size);
          return (
            e.forEach(function (e, n) {
              r[++t] = [n, e];
            }),
            r
          );
        },
        _t = function (e) {
          var t = -1,
            r = Array(e.size);
          return (
            e.forEach(function (e) {
              r[++t] = e;
            }),
            r
          );
        },
        Mt = D ? D.prototype : void 0,
        St = Mt ? Mt.valueOf : void 0;
      var zt = function (e, t, r, n, i, a, o) {
        switch (r) {
          case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case "[object ArrayBuffer]":
            return !(e.byteLength != t.byteLength || !a(new bt(e), new bt(t)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return vt(+e, +t);
          case "[object Error]":
            return e.name == t.name && e.message == t.message;
          case "[object RegExp]":
          case "[object String]":
            return e == t + "";
          case "[object Map]":
            var s = wt;
          case "[object Set]":
            var l = 1 & n;
            if ((s || (s = _t), e.size != t.size && !l)) return !1;
            var c = o.get(e);
            if (c) return c == t;
            (n |= 2), o.set(e, t);
            var u = Bt(s(e), s(t), n, i, a, o);
            return o.delete(e), u;
          case "[object Symbol]":
            if (St) return St.call(e) == St.call(t);
        }
        return !1;
      };
      var Et = function (e, t) {
          for (var r = -1, n = t.length, i = e.length; ++r < n; )
            e[i + r] = t[r];
          return e;
        },
        Ot = Array.isArray,
        Ft = Et,
        Rt = Ot;
      var jt = function (e, t, r) {
        var n = t(e);
        return Rt(e) ? n : Ft(n, r(e));
      };
      var xt = function (e, t) {
          for (
            var r = -1, n = null == e ? 0 : e.length, i = 0, a = [];
            ++r < n;

          ) {
            var o = e[r];
            t(o, r, e) && (a[i++] = o);
          }
          return a;
        },
        Ct = function () {
          return [];
        },
        Tt = Object.prototype.propertyIsEnumerable,
        Wt = Object.getOwnPropertySymbols,
        Pt = Wt
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  xt(Wt(e), function (t) {
                    return Tt.call(e, t);
                  }));
            }
          : Ct;
      var It = function (e, t) {
        for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
        return n;
      };
      var Nt = function (e) {
          return null != e && "object" == typeof e;
        },
        At = G,
        Dt = Nt;
      var Ut = function (e) {
          return Dt(e) && "[object Arguments]" == At(e);
        },
        kt = Nt,
        Xt = Object.prototype,
        Lt = Xt.hasOwnProperty,
        qt = Xt.propertyIsEnumerable,
        Zt = Ut(
          (function () {
            return arguments;
          })(),
        )
          ? Ut
          : function (e) {
              return kt(e) && Lt.call(e, "callee") && !qt.call(e, "callee");
            },
        $t = { exports: {} };
      var Vt = function () {
        return !1;
      };
      !(function (e, t) {
        var r = A,
          n = Vt,
          i = t && !t.nodeType && t,
          a = i && e && !e.nodeType && e,
          o = a && a.exports === i ? r.Buffer : void 0,
          s = (o ? o.isBuffer : void 0) || n;
        e.exports = s;
      })($t, $t.exports);
      var Yt = /^(?:0|[1-9]\d*)$/;
      var Ht = function (e, t) {
        var r = typeof e;
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ("number" == r || ("symbol" != r && Yt.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      };
      var Gt = function (e) {
          return (
            "number" == typeof e &&
            e > -1 &&
            e % 1 == 0 &&
            e <= 9007199254740991
          );
        },
        Kt = G,
        Qt = Gt,
        Jt = Nt,
        er = {};
      (er["[object Float32Array]"] =
        er["[object Float64Array]"] =
        er["[object Int8Array]"] =
        er["[object Int16Array]"] =
        er["[object Int32Array]"] =
        er["[object Uint8Array]"] =
        er["[object Uint8ClampedArray]"] =
        er["[object Uint16Array]"] =
        er["[object Uint32Array]"] =
          !0),
        (er["[object Arguments]"] =
          er["[object Array]"] =
          er["[object ArrayBuffer]"] =
          er["[object Boolean]"] =
          er["[object DataView]"] =
          er["[object Date]"] =
          er["[object Error]"] =
          er["[object Function]"] =
          er["[object Map]"] =
          er["[object Number]"] =
          er["[object Object]"] =
          er["[object RegExp]"] =
          er["[object Set]"] =
          er["[object String]"] =
          er["[object WeakMap]"] =
            !1);
      var tr = function (e) {
        return Jt(e) && Qt(e.length) && !!er[Kt(e)];
      };
      var rr = function (e) {
          return function (t) {
            return e(t);
          };
        },
        nr = { exports: {} };
      !(function (e, t) {
        var r = P,
          n = t && !t.nodeType && t,
          i = n && e && !e.nodeType && e,
          a = i && i.exports === n && r.process,
          o = (function () {
            try {
              var e = i && i.require && i.require("util").types;
              return e || (a && a.binding && a.binding("util"));
            } catch (e) {}
          })();
        e.exports = o;
      })(nr, nr.exports);
      var ir = tr,
        ar = rr,
        or = nr.exports,
        sr = or && or.isTypedArray,
        lr = sr ? ar(sr) : ir,
        cr = It,
        ur = Zt,
        dr = Ot,
        fr = $t.exports,
        mr = Ht,
        hr = lr,
        pr = Object.prototype.hasOwnProperty;
      var yr = function (e, t) {
          var r = dr(e),
            n = !r && ur(e),
            i = !r && !n && fr(e),
            a = !r && !n && !i && hr(e),
            o = r || n || i || a,
            s = o ? cr(e.length, String) : [],
            l = s.length;
          for (var c in e)
            (!t && !pr.call(e, c)) ||
              (o &&
                ("length" == c ||
                  (i && ("offset" == c || "parent" == c)) ||
                  (a &&
                    ("buffer" == c ||
                      "byteLength" == c ||
                      "byteOffset" == c)) ||
                  mr(c, l))) ||
              s.push(c);
          return s;
        },
        gr = Object.prototype;
      var br = function (e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || gr);
      };
      var vr = (function (e, t) {
          return function (r) {
            return e(t(r));
          };
        })(Object.keys, Object),
        Br = br,
        wr = vr,
        _r = Object.prototype.hasOwnProperty;
      var Mr = te,
        Sr = Gt;
      var zr = yr,
        Er = function (e) {
          if (!Br(e)) return wr(e);
          var t = [];
          for (var r in Object(e))
            _r.call(e, r) && "constructor" != r && t.push(r);
          return t;
        },
        Or = function (e) {
          return null != e && Sr(e.length) && !Mr(e);
        };
      var Fr = jt,
        Rr = Pt,
        jr = function (e) {
          return Or(e) ? zr(e) : Er(e);
        };
      var xr = function (e) {
          return Fr(e, jr, Rr);
        },
        Cr = Object.prototype.hasOwnProperty;
      var Tr = function (e, t, r, n, i, a) {
          var o = 1 & r,
            s = xr(e),
            l = s.length;
          if (l != xr(t).length && !o) return !1;
          for (var c = l; c--; ) {
            var u = s[c];
            if (!(o ? u in t : Cr.call(t, u))) return !1;
          }
          var d = a.get(e),
            f = a.get(t);
          if (d && f) return d == t && f == e;
          var m = !0;
          a.set(e, t), a.set(t, e);
          for (var h = o; ++c < l; ) {
            var p = e[(u = s[c])],
              y = t[u];
            if (n) var g = o ? n(y, p, u, t, e, a) : n(p, y, u, e, t, a);
            if (!(void 0 === g ? p === y || i(p, y, r, n, a) : g)) {
              m = !1;
              break;
            }
            h || (h = "constructor" == u);
          }
          if (m && !h) {
            var b = e.constructor,
              v = t.constructor;
            b == v ||
              !("constructor" in e) ||
              !("constructor" in t) ||
              ("function" == typeof b &&
                b instanceof b &&
                "function" == typeof v &&
                v instanceof v) ||
              (m = !1);
          }
          return a.delete(e), a.delete(t), m;
        },
        Wr = ve(A, "DataView"),
        Pr = Be,
        Ir = ve(A, "Promise"),
        Nr = ve(A, "Set"),
        Ar = ve(A, "WeakMap"),
        Dr = G,
        Ur = oe,
        kr = "[object Map]",
        Xr = "[object Promise]",
        Lr = "[object Set]",
        qr = "[object WeakMap]",
        Zr = "[object DataView]",
        $r = Ur(Wr),
        Vr = Ur(Pr),
        Yr = Ur(Ir),
        Hr = Ur(Nr),
        Gr = Ur(Ar),
        Kr = Dr;
      ((Wr && Kr(new Wr(new ArrayBuffer(1))) != Zr) ||
        (Pr && Kr(new Pr()) != kr) ||
        (Ir && Kr(Ir.resolve()) != Xr) ||
        (Nr && Kr(new Nr()) != Lr) ||
        (Ar && Kr(new Ar()) != qr)) &&
        (Kr = function (e) {
          var t = Dr(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            n = r ? Ur(r) : "";
          if (n)
            switch (n) {
              case $r:
                return Zr;
              case Vr:
                return kr;
              case Yr:
                return Xr;
              case Hr:
                return Lr;
              case Gr:
                return qr;
            }
          return t;
        });
      var Qr = ct,
        Jr = gt,
        en = zt,
        tn = Tr,
        rn = Kr,
        nn = Ot,
        an = $t.exports,
        on = lr,
        sn = "[object Arguments]",
        ln = "[object Array]",
        cn = "[object Object]",
        un = Object.prototype.hasOwnProperty;
      var dn = function (e, t, r, n, i, a) {
          var o = nn(e),
            s = nn(t),
            l = o ? ln : rn(e),
            c = s ? ln : rn(t),
            u = (l = l == sn ? cn : l) == cn,
            d = (c = c == sn ? cn : c) == cn,
            f = l == c;
          if (f && an(e)) {
            if (!an(t)) return !1;
            (o = !0), (u = !1);
          }
          if (f && !u)
            return (
              a || (a = new Qr()),
              o || on(e) ? Jr(e, t, r, n, i, a) : en(e, t, l, r, n, i, a)
            );
          if (!(1 & r)) {
            var m = u && un.call(e, "__wrapped__"),
              h = d && un.call(t, "__wrapped__");
            if (m || h) {
              var p = m ? e.value() : e,
                y = h ? t.value() : t;
              return a || (a = new Qr()), i(p, y, r, n, a);
            }
          }
          return !!f && (a || (a = new Qr()), tn(e, t, r, n, i, a));
        },
        fn = Nt;
      var mn = function e(t, r, n, i, a) {
          return (
            t === r ||
            (null == t || null == r || (!fn(t) && !fn(r))
              ? t != t && r != r
              : dn(t, r, n, i, e, a))
          );
        },
        hn = mn;
      var pn = function (e, t, r) {
        var n = (r = "function" == typeof r ? r : void 0) ? r(e, t) : void 0;
        return void 0 === n ? hn(e, t, void 0, r) : !!n;
      };
      const yn = (e, t, r) =>
          r.ignoreCase
            ? "string" == typeof e &&
              "string" == typeof t &&
              e.toLowerCase() === t.toLowerCase()
            : r.recursiveEqual
            ? pn(e, t, (e, t) =>
                r.ignoreCase && "string" == typeof e && "string" == typeof t
                  ? e.toLowerCase() === t.toLowerCase()
                  : void 0,
              )
            : e === t,
        gn = (e, t) => {
          if (e === t) return 1;
          if (null === e || null === t) return 0;
          if ("object" != typeof e || "object" != typeof t) return 0;
          const r = Object.keys(e),
            n = Object.keys(t),
            i = r.length,
            a = n.length;
          if (0 === i || 0 === a) return 0;
          const o = new Set(r),
            s = new Set(n),
            l = new Set([...o].filter((e) => s.has(e)));
          return 0 === l.size
            ? 0
            : 1 !== l.size || (1 !== i && 1 !== a) || e[r[0]] === t[n[0]]
            ? Math.max(l.size / i, l.size / a)
            : 0;
        },
        bn = (e, t, r, i, s, l, d = [], m = []) => {
          if (
            (r && i
              ? (d.push({ level: s, type: "equal", text: `"${r}": [` }),
                m.push({ level: s, type: "equal", text: `"${i}": [` }))
              : (d.push({ level: s, type: "equal", text: "[" }),
                m.push({ level: s, type: "equal", text: "[" })),
            s >= (l.maxDepth || 1 / 0))
          )
            d.push({ level: s + 1, type: "equal", text: "..." }),
              m.push({ level: s + 1, type: "equal", text: "..." });
          else {
            const [h, p] = ((e, t, r, i, s, l) => {
              const d = Array(e.length + 1)
                  .fill(0)
                  .map(() => Array(t.length + 1).fill(0)),
                m = Array(e.length + 1)
                  .fill(0)
                  .map(() => Array(t.length + 1).fill(0));
              for (let t = 1; t <= e.length; t++) m[t][0] = "up";
              for (let e = 1; e <= t.length; e++) m[0][e] = "left";
              for (let r = 1; r <= e.length; r++)
                for (let n = 1; n <= t.length; n++) {
                  const i = c(e[r - 1]);
                  i !== c(t[n - 1]) || ("array" !== i && "object" !== i)
                    ? yn(e[r - 1], t[n - 1], l)
                      ? ((d[r][n] = d[r - 1][n - 1] + 1), (m[r][n] = "diag"))
                      : d[r - 1][n] >= d[r][n - 1]
                      ? ((d[r][n] = d[r - 1][n]), (m[r][n] = "up"))
                      : ((d[r][n] = d[r][n - 1]), (m[r][n] = "left"))
                    : l.recursiveEqual
                    ? yn(e[r - 1], t[n - 1], l) || gn(e[r - 1], t[n - 1]) > 0.5
                      ? ((d[r][n] = d[r - 1][n - 1] + 1), (m[r][n] = "diag"))
                      : d[r - 1][n] >= d[r][n - 1]
                      ? ((d[r][n] = d[r - 1][n]), (m[r][n] = "up"))
                      : ((d[r][n] = d[r][n - 1]), (m[r][n] = "left"))
                    : ((d[r][n] = d[r - 1][n - 1] + 1), (m[r][n] = "diag"));
                }
              let h = e.length,
                p = t.length,
                y = [],
                g = [];
              for (; h > 0 || p > 0; )
                if ("diag" === m[h][p]) {
                  const a = c(e[h - 1]);
                  if (
                    l.recursiveEqual &&
                    ("array" === a || "object" === a) &&
                    yn(e[h - 1], t[p - 1], l)
                  ) {
                    const r = [],
                      i = [];
                    u(r, i, "", "", e[h - 1], t[p - 1], s + 1, l),
                      (y = n(y, r.reverse(), !0)),
                      (g = n(g, i.reverse(), !0));
                  } else if ("array" === a) {
                    const [a, o] = bn(e[h - 1], t[p - 1], r, i, s + 1, l);
                    (y = n(y, a.reverse(), !0)), (g = n(g, o.reverse(), !0));
                  } else if ("object" === a) {
                    const [r, i] = f(e[h - 1], t[p - 1], s + 2, l, bn);
                    y.unshift({ level: s + 1, type: "equal", text: "}" }),
                      g.unshift({ level: s + 1, type: "equal", text: "}" }),
                      (y = n(y, r.reverse(), !0)),
                      (g = n(g, i.reverse(), !0)),
                      y.unshift({ level: s + 1, type: "equal", text: "{" }),
                      g.unshift({ level: s + 1, type: "equal", text: "{" });
                  } else {
                    const r = [],
                      i = [];
                    u(r, i, "", "", e[h - 1], t[p - 1], s + 1, l),
                      (y = n(y, r.reverse(), !0)),
                      (g = n(g, i.reverse(), !0));
                  }
                  h--, p--;
                } else if ("up" === m[h][p])
                  if (l.showModifications && h > 1 && "left" === m[h - 1][p]) {
                    const a = c(e[h - 1]);
                    if (a === c(t[p - 1]))
                      if ("array" === a) {
                        const [a, o] = bn(e[h - 1], t[p - 1], r, i, s + 1, l);
                        (y = n(y, a.reverse(), !0)),
                          (g = n(g, o.reverse(), !0));
                      } else if ("object" === a) {
                        const [r, i] = f(e[h - 1], t[p - 1], s + 2, l, bn);
                        y.unshift({ level: s + 1, type: "equal", text: "}" }),
                          g.unshift({ level: s + 1, type: "equal", text: "}" }),
                          (y = n(y, r.reverse(), !0)),
                          (g = n(g, i.reverse(), !0)),
                          y.unshift({ level: s + 1, type: "equal", text: "{" }),
                          g.unshift({ level: s + 1, type: "equal", text: "{" });
                      } else
                        y.unshift({
                          level: s + 1,
                          type: "modify",
                          text: o(e[h - 1]),
                        }),
                          g.unshift({
                            level: s + 1,
                            type: "modify",
                            text: o(t[p - 1]),
                          });
                    else {
                      const r = [],
                        i = [];
                      u(r, i, "", "", e[h - 1], t[p - 1], s + 1, l),
                        (y = n(y, r.reverse(), !0)),
                        (g = n(g, i.reverse(), !0));
                    }
                    h--, p--;
                  } else {
                    const t = a(e[h - 1], void 0, 1).split("\n");
                    for (let e = t.length - 1; e >= 0; e--) {
                      var b, v;
                      y.unshift({
                        level:
                          s +
                          1 +
                          ((null == (b = t[e].match(/^\s+/)) ||
                          null == (v = b[0])
                            ? void 0
                            : v.length) || 0),
                        type: "remove",
                        text: t[e].replace(/^\s+/, "").replace(/,$/g, ""),
                      }),
                        g.unshift({ level: s + 1, type: "equal", text: "" });
                    }
                    h--;
                  }
                else {
                  const e = a(t[p - 1], void 0, 1).split("\n");
                  for (let t = e.length - 1; t >= 0; t--) {
                    var B, w;
                    y.unshift({ level: s + 1, type: "equal", text: "" }),
                      g.unshift({
                        level:
                          s +
                          1 +
                          ((null == (B = e[t].match(/^\s+/)) ||
                          null == (w = B[0])
                            ? void 0
                            : w.length) || 0),
                        type: "add",
                        text: e[t].replace(/^\s+/, "").replace(/,$/g, ""),
                      });
                  }
                  p--;
                }
              return [y, g];
            })(e, t, r, i, s, l);
            (d = n(d, h)), (m = n(m, p));
          }
          return (
            d.push({ level: s, type: "equal", text: "]" }),
            m.push({ level: s, type: "equal", text: "]" }),
            [d, m]
          );
        },
        vn = (e, t, r, i, a, s, l = [], d = []) => {
          if (
            ((e = [...e]),
            (t = [...t]),
            r && i
              ? (l.push({ level: a, type: "equal", text: `"${r}": [` }),
                d.push({ level: a, type: "equal", text: `"${i}": [` }))
              : (l.push({ level: a, type: "equal", text: "[" }),
                d.push({ level: a, type: "equal", text: "[" })),
            a >= (s.maxDepth || 1 / 0))
          )
            l.push({ level: a + 1, type: "equal", text: "..." }),
              d.push({ level: a + 1, type: "equal", text: "..." });
          else
            for (; e.length || t.length; ) {
              const r = e[0],
                i = t[0],
                g = c(r),
                b = c(i);
              if (e.length && t.length) {
                if (g !== b) u(l, d, "", "", r, i, a + 1, s);
                else if (
                  s.recursiveEqual &&
                  ["object", "array"].includes(g) &&
                  yn(r, i, s)
                )
                  u(l, d, "", "", r, i, a + 1, s);
                else if ("object" === g) {
                  l.push({ level: a + 1, type: "equal", text: "{" }),
                    d.push({ level: a + 1, type: "equal", text: "{" });
                  const [e, t] = f(r, i, a + 2, s, vn);
                  (l = n(l, e)),
                    (d = n(d, t)),
                    l.push({ level: a + 1, type: "equal", text: "}" }),
                    d.push({ level: a + 1, type: "equal", text: "}" });
                } else if ("array" === g) {
                  const [e, t] = vn(r, i, "", "", a + 1, s, [], []);
                  (l = n(l, e)), (d = n(d, t));
                } else
                  r === i
                    ? (l.push({ level: a + 1, type: "equal", text: o(r) }),
                      d.push({ level: a + 1, type: "equal", text: o(i) }))
                    : s.showModifications
                    ? (l.push({ level: a + 1, type: "modify", text: o(r) }),
                      d.push({ level: a + 1, type: "modify", text: o(i) }))
                    : (l.push({ level: a + 1, type: "remove", text: o(r) }),
                      l.push({ level: a + 1, type: "equal", text: "" }),
                      d.push({ level: a + 1, type: "equal", text: "" }),
                      d.push({ level: a + 1, type: "add", text: o(i) }));
                e.shift(), t.shift();
              } else if (e.length) {
                const t = o(r, void 0, !0).split("\n");
                for (let e = 0; e < t.length; e++) {
                  var m, h;
                  l.push({
                    level:
                      a +
                      1 +
                      ((null == (m = t[e].match(/^\s+/)) || null == (h = m[0])
                        ? void 0
                        : h.length) || 0),
                    type: "remove",
                    text: t[e].replace(/^\s+/, "").replace(/,$/g, ""),
                  }),
                    d.push({ level: a + 1, type: "equal", text: "" });
                }
                e.shift();
              } else if (t.length) {
                const e = o(i, void 0, !0).split("\n");
                for (let t = 0; t < e.length; t++) {
                  var p, y;
                  l.push({ level: a + 1, type: "equal", text: "" }),
                    d.push({
                      level:
                        a +
                        1 +
                        ((null == (p = e[t].match(/^\s+/)) || null == (y = p[0])
                          ? void 0
                          : y.length) || 0),
                      type: "add",
                      text: e[t].replace(/^\s+/, "").replace(/,$/g, ""),
                    });
                }
                t.shift();
              }
            }
          return (
            l.push({ level: a, type: "equal", text: "]" }),
            d.push({ level: a, type: "equal", text: "]" }),
            [l, d]
          );
        };
      function Bn() {
        return (
          (Bn =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          Bn.apply(this, arguments)
        );
      }
      const wn = (e, t) => {
        if (!e || "object" != typeof e) return e;
        if (Array.isArray(e)) {
          const r = [...e];
          return (
            r.sort((e, r) =>
              l(e, r, { ignoreCase: null == t ? void 0 : t.ignoreCase }),
            ),
            r.map((e) => wn(e, t))
          );
        }
        const r = Bn({}, e);
        for (const e in r) r[e] = wn(r[e], t);
        return r;
      };
      function _n() {
        return (
          (_n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          _n.apply(this, arguments)
        );
      }
      const Mn = { level: 0, type: "equal", text: "" },
        Sn = { level: 0, type: "equal", text: "{" },
        zn = { level: 0, type: "equal", text: "}" };
      let En = class {
        detectCircular(e) {
          if (this.options.detectCircular && i(e))
            throw new Error(
              `Circular reference detected in object (with keys ${Object.keys(e)
                .map((e) => `"${e}"`)
                .join(", ")})`,
            );
        }
        sortResultLines(e, t) {
          for (let r = 0; r < e.length; r++) {
            let r = !1;
            for (let n = 1; n < e.length; n++)
              if (
                "remove" === e[n].type &&
                "equal" === e[n - 1].type &&
                "equal" === t[n].type &&
                "add" === t[n - 1].type
              ) {
                const i = e[n - 1];
                (e[n - 1] = e[n]), (e[n] = i);
                const a = t[n - 1];
                (t[n - 1] = t[n]), (t[n] = a), (r = !0);
              }
            if (!r) break;
          }
        }
        calculateLineNumbers(e) {
          let t = 0;
          for (const r of e) r.text && (r.lineNumber = ++t);
        }
        calculateCommas(e) {
          const t = Array(e.length).fill(0);
          for (let r = e.length - 1; r > 0; r--)
            e[r].text ? (t[r - 1] = r) : (t[r - 1] = t[r]);
          for (let r = 0; r < e.length; r++)
            !e[r].text.endsWith("{") &&
              !e[r].text.endsWith("[") &&
              e[r].text &&
              t[r] &&
              e[r].level <= e[t[r]].level &&
              (e[r].comma = !0);
        }
        diff(e, t) {
          this.detectCircular(e),
            this.detectCircular(t),
            ("unorder-normal" !== this.options.arrayDiffMethod &&
              "unorder-lcs" !== this.options.arrayDiffMethod) ||
              ((e = wn(e, this.options)), (t = wn(t, this.options)));
          let r = [],
            i = [];
          const o = c(e);
          if (o !== c(t)) {
            (r = a(e, void 0, 1, this.options.maxDepth)
              .split("\n")
              .map((e) => {
                var t, r;
                return {
                  level:
                    (null == (t = e.match(/^\s+/)) || null == (r = t[0])
                      ? void 0
                      : r.length) || 0,
                  type: "remove",
                  text: e.replace(/^\s+/, "").replace(/,$/g, ""),
                  comma: e.endsWith(","),
                };
              })),
              (i = a(t, void 0, 1, this.options.maxDepth)
                .split("\n")
                .map((e) => {
                  var t, r;
                  return {
                    level:
                      (null == (t = e.match(/^\s+/)) || null == (r = t[0])
                        ? void 0
                        : r.length) || 0,
                    type: "add",
                    text: e.replace(/^\s+/, "").replace(/,$/g, ""),
                    comma: e.endsWith(","),
                  };
                }));
            const o = r.length,
              s = i.length;
            (r = n(
              r,
              Array(s)
                .fill(0)
                .map(() => _n({}, Mn)),
            )),
              (i = n(
                i,
                Array(o)
                  .fill(0)
                  .map(() => _n({}, Mn)),
                !0,
              ));
          } else
            "object" === o
              ? (([r, i] = f(e, t, 1, this.options, this.arrayDiffFunc)),
                r.unshift(_n({}, Sn)),
                r.push(_n({}, zn)),
                i.unshift(_n({}, Sn)),
                i.push(_n({}, zn)))
              : "array" === o
              ? ([r, i] = this.arrayDiffFunc(e, t, "", "", 0, this.options))
              : e !== t
              ? this.options.ignoreCase
                ? "string" == typeof e &&
                  "string" == typeof t &&
                  e.toLowerCase() === t.toLowerCase() &&
                  ((r = [{ level: 0, type: "equal", text: e }]),
                  (i = [{ level: 0, type: "equal", text: t }]))
                : this.options.showModifications
                ? ((r = [
                    {
                      level: 0,
                      type: "modify",
                      text: a(e, void 0, void 0, this.options.maxDepth),
                    },
                  ]),
                  (i = [
                    {
                      level: 0,
                      type: "modify",
                      text: a(t, void 0, void 0, this.options.maxDepth),
                    },
                  ]))
                : ((r = [
                    {
                      level: 0,
                      type: "remove",
                      text: a(e, void 0, void 0, this.options.maxDepth),
                    },
                    _n({}, Mn),
                  ]),
                  (i = [
                    _n({}, Mn),
                    {
                      level: 0,
                      type: "add",
                      text: a(t, void 0, void 0, this.options.maxDepth),
                    },
                  ]))
              : ((r = [
                  {
                    level: 0,
                    type: "equal",
                    text: a(e, void 0, void 0, this.options.maxDepth),
                  },
                ]),
                (i = [
                  {
                    level: 0,
                    type: "equal",
                    text: a(t, void 0, void 0, this.options.maxDepth),
                  },
                ]));
          return (
            this.sortResultLines(r, i),
            this.calculateLineNumbers(r),
            this.calculateLineNumbers(i),
            this.calculateCommas(r),
            this.calculateCommas(i),
            [r, i]
          );
        }
        constructor({
          detectCircular: e = !0,
          maxDepth: t = 1 / 0,
          showModifications: r = !0,
          arrayDiffMethod: n = "normal",
          ignoreCase: i = !1,
          ignoreCaseForKey: a = !1,
          recursiveEqual: o = !1,
        } = {}) {
          (this.options = {
            detectCircular: e,
            maxDepth: t,
            showModifications: r,
            arrayDiffMethod: n,
            ignoreCase: i,
            ignoreCaseForKey: a,
            recursiveEqual: o,
          }),
            (this.arrayDiffFunc = "lcs" === n || "unorder-lcs" === n ? bn : vn);
        }
      };
      var On = r(47427);
      function Fn() {
        return (
          (Fn =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          Fn.apply(this, arguments)
        );
      }
      const Rn = (e) => "hasLinesBefore" in e || "hasLinesAfter" in e,
        jn = (e, t, r) => (Rn(e) ? r : t * (e.end - e.start + 1)),
        xn = (e, t) => {
          const r = [];
          let n, i;
          if (e.length && t.length)
            for (
              e = [...e],
                t = [...t],
                n = Fn({}, e.shift()),
                i = Fn({}, t.shift());
              ;

            ) {
              if (n.start === i.start) {
                const e = Math.min(n.end, i.end);
                r.push(Fn({}, n, i, { end: e })), (n.start = i.start = e);
              } else if (n.start < i.start) {
                const e = Math.min(n.end, i.start);
                r.push(Fn({}, i, n, { end: e })), (n.start = e);
              } else {
                const e = Math.min(n.start, i.end);
                r.push(Fn({}, n, i, { end: e })), (i.start = e);
              }
              if (!e.length || !t.length) break;
              n.start === n.end && (n = Fn({}, e.shift())),
                i.start === i.end && (i = Fn({}, t.shift()));
            }
          return (
            e.length ||
              r.push(...t.map((e) => Fn({}, e, { token: n.token || "plain" }))),
            t.length || r.push(...e),
            r
          );
        };
      var Cn = {};
      Object.defineProperty(Cn, "__esModule", { value: !0 }),
        (Cn.applyPatch =
          Cn.calcPatch =
          Nn =
          Cn.lcs =
          Cn.diff =
          Cn.diff_core =
            void 0);
      let Tn = class {
        [Symbol.iterator]() {
          return this;
        }
        next() {
          const { state: e, result: t } = this;
          if (this.c > 1) return (t.done = !0), (t.value = void 0), t;
          const r = (function (e, t) {
            const { b: r, eq: n, stack_base: i } = e;
            let { i: a, N: o, j: s, M: l, Z: c, stack_top: u } = e;
            for (;;)
              switch (t) {
                case 0:
                  e: for (; o > 0 && l > 0; ) {
                    r.fill(0, 0, 2 * c);
                    const e = o - l,
                      t = o + l,
                      d = 1 & t,
                      f = a + o - 1,
                      m = s + l - 1,
                      h = (t + d) / 2;
                    let p;
                    t: for (let t = 0; t <= h; t++) {
                      const h = 2 * Math.max(0, t - l) - t,
                        y = t - 2 * Math.max(0, t - o);
                      for (let f = h; f <= y; f += 2) {
                        const m = r[f - 1 - c * Math.floor((f - 1) / c)],
                          h = r[f + 1 - c * Math.floor((f + 1) / c)],
                          y = f === -t || (f !== t && m < h) ? h : m + 1,
                          g = y - f;
                        let b = y,
                          v = g;
                        for (; b < o && v < l && n(a + b, s + v); ) b++, v++;
                        if (
                          ((r[f - c * Math.floor(f / c)] = b),
                          1 === d &&
                            (p = e - f) >= 1 - t &&
                            p < t &&
                            b + r[c + p - c * Math.floor(p / c)] >= o)
                        ) {
                          if (t > 1 || b !== y) {
                            (i[u++] = a + b),
                              (i[u++] = o - b),
                              (i[u++] = s + v),
                              (i[u++] = l - v),
                              (o = y),
                              (l = g),
                              (c = 2 * (Math.min(o, l) + 1));
                            continue e;
                          }
                          break t;
                        }
                      }
                      for (let g = h; g <= y; g += 2) {
                        const h = r[c + g - 1 - c * Math.floor((g - 1) / c)],
                          y = r[c + g + 1 - c * Math.floor((g + 1) / c)],
                          b = g === -t || (g !== t && h < y) ? y : h + 1,
                          v = b - g;
                        let B = b,
                          w = v;
                        for (; B < o && w < l && n(f - B, m - w); ) B++, w++;
                        if (
                          ((r[c + g - c * Math.floor(g / c)] = B),
                          0 === d &&
                            (p = e - g) >= -t &&
                            p <= t &&
                            B + r[p - c * Math.floor(p / c)] >= o)
                        ) {
                          if (t > 0 || B !== b) {
                            (i[u++] = a + o - b),
                              (i[u++] = b),
                              (i[u++] = s + l - v),
                              (i[u++] = v),
                              (o -= B),
                              (l -= w),
                              (c = 2 * (Math.min(o, l) + 1));
                            continue e;
                          }
                          break t;
                        }
                      }
                    }
                    if (o !== l) {
                      l > o
                        ? ((a += o), (s += o), (l -= o), (o = 0))
                        : ((a += l), (s += l), (o -= l), (l = 0));
                      break;
                    }
                  }
                  if (o + l !== 0)
                    if (e.pxe === a || e.pye === s)
                      (e.pxe = a + o), (e.pye = s + l);
                    else {
                      const t = e.pxs;
                      if (
                        ((e.oxs = e.pxs),
                        (e.oxe = e.pxe),
                        (e.oys = e.pys),
                        (e.oye = e.pye),
                        (e.pxs = a),
                        (e.pxe = a + o),
                        (e.pys = s),
                        (e.pye = s + l),
                        t >= 0)
                      )
                        return (
                          (e.i = a),
                          (e.N = o),
                          (e.j = s),
                          (e.M = l),
                          (e.Z = c),
                          (e.stack_top = u),
                          1
                        );
                    }
                case 1:
                  if (0 === u) return 2;
                  (l = i[--u]),
                    (s = i[--u]),
                    (o = i[--u]),
                    (a = i[--u]),
                    (c = 2 * (Math.min(o, l) + 1)),
                    (t = 0);
              }
          })(e, this.c);
          return (
            (this.c = r),
            1 === r
              ? ((t.value = [e.oxs, e.oxe, e.oys, e.oye]), t)
              : e.pxs >= 0
              ? ((t.value = [e.pxs, e.pxe, e.pys, e.pye]), t)
              : ((t.done = !0), (t.value = void 0), t)
          );
        }
        constructor(e) {
          (this.state = e),
            (this.c = 0),
            (this.result = { value: null, done: !1 });
        }
      };
      function Wn(e, t, r, n, i) {
        const a = 2 * (Math.min(t, n) + 1),
          o = t + n,
          s = new (
            o < 256 ? Uint8Array : o < 65536 ? Uint16Array : Uint32Array
          )(2 * a);
        return new Tn({
          i: e,
          N: t,
          j: r,
          M: n,
          Z: a,
          b: s,
          eq: i,
          pxs: -1,
          pxe: -1,
          pys: -1,
          pye: -1,
          oxs: -1,
          oxe: -1,
          oys: -1,
          oye: -1,
          stack_top: 0,
          stack_base: [],
        });
      }
      function Pn(e, t) {
        let [r, n, i] = [0, e.length, t.length];
        for (; r < n && r < i && e[r] === t[r]; ) r++;
        if (r === n && r === i) return [][Symbol.iterator]();
        for (; e[--n] === t[--i] && n > r && i > r; );
        return Wn(r, n + 1 - r, r, i + 1 - r, (r, n) => e[r] === t[n]);
      }
      (Cn.diff_core = Wn), (Cn.diff = Pn);
      let In = class {
        [Symbol.iterator]() {
          return this;
        }
        next() {
          const e = this.diff.next();
          if (e.done) {
            const { i: t, j: r, N: n } = this;
            return (
              t < n && ((e.done = !1), (e.value = [t, r, n - t]), (this.i = n)),
              e
            );
          }
          const t = e.value,
            r = t[0],
            n = t[1],
            i = t[3],
            { i: a, j: o } = this;
          return (
            a !== r && (t.length--, (t[0] = a), (t[1] = o), (t[2] = r - a)),
            (this.i = n),
            (this.j = i),
            e
          );
        }
        constructor(e, t) {
          (this.diff = e), (this.N = t), (this.i = 0), (this.j = 0);
        }
      };
      var Nn = (Cn.lcs = function (e, t) {
        return new In(Pn(e, t), e.length);
      });
      (Cn.calcPatch = function* (e, t) {
        const r = ArrayBuffer.isView(e)
          ? Uint8Array.prototype.subarray
          : e.slice;
        for (const n of Pn(e, t)) (n[2] = r.call(t, n[2], n[3])), yield n;
      }),
        (Cn.applyPatch = function* (e, t) {
          let r = 0;
          const n = ArrayBuffer.isView(e)
            ? Uint8Array.prototype.subarray
            : e.slice;
          for (const [i, a, o] of t)
            r < i && (yield n.call(e, r, i)),
              o.length > 0 && (yield o),
              (r = a);
          r < e.length && (yield n.call(e, r));
        });
      const An = (e, t) => {
          const r = [];
          let n = 0;
          for (const i of e) r.push(n), (n += i.length + t);
          return r.push(n - t), r;
        },
        Dn = (e) => e.filter((e) => e.end > e.start),
        Un = (e, t, r) => {
          if (!e) return [{ token: "plain", start: r, end: t.length + r }];
          if (!Number.isNaN(Number(t)))
            return [{ token: "number", start: r, end: t.length + r }];
          if ("true" === t || "false" === t)
            return [{ token: "boolean", start: r, end: t.length + r }];
          if ("null" === t)
            return [{ token: "null", start: r, end: t.length + r }];
          if (t.startsWith('"')) {
            if (t.endsWith(": [") || t.endsWith(": {"))
              return [
                { token: "key", start: r, end: t.length - 3 + r },
                {
                  token: "punctuation",
                  start: t.length - 3,
                  end: t.length - 2 + r,
                },
                { token: "plain", start: t.length - 2, end: t.length - 1 + r },
                {
                  token: "punctuation",
                  start: t.length - 1,
                  end: t.length + r,
                },
              ];
            let n = 1;
            for (; n < t.length && '"' !== t[n]; ) "\\" === t[n] && ++n, ++n;
            return n === t.length - 1
              ? [{ token: "string", start: r, end: t.length + r }]
              : [
                  { token: "key", start: r, end: n + 1 + r },
                  { token: "punctuation", start: n + 1, end: n + 2 + r },
                  { token: "plain", start: n + 2, end: n + 3 + r },
                  ...Un(e, t.substring(n + 3), r + n + 3),
                ];
          }
          return "{" === t || "}" === t || "[" === t || "]" === t
            ? [{ token: "punctuation", start: r, end: t.length + r }]
            : [{ token: "plain", start: r, end: t.length + r }];
        },
        kn = { threshold: 8, margin: 3 },
        Xn = (e, t, r) => {
          if (!r) return [{ start: 0, end: e.length, isEqual: !1 }];
          const n = [];
          for (let r = 0; r < e.length; r++)
            "equal" === e[r].type && "equal" === t[r].type
              ? n.length && n[n.length - 1].isEqual
                ? n[n.length - 1].end++
                : n.push({ start: r, end: r + 1, isEqual: !0 })
              : n.length && !n[n.length - 1].isEqual
              ? n[n.length - 1].end++
              : n.push({ start: r, end: r + 1, isEqual: !1 });
          const i = !0 === r ? kn : r,
            { threshold: a, margin: o } = i;
          a < 2 * o + 1 &&
            console.warn(
              `Threshold (${a}) is no more than 2 margins + 1 "expand" line (${o} * 2 + 1), it's not necessary to hide unchanged areas which have less than ${
                2 * o + 1
              } lines.`,
            );
          const s = [];
          for (let t = 0; t < n.length; t++) {
            const r = n[t];
            !r.isEqual || r.end - r.start < a || r.end - r.start <= 2 * o + 1
              ? s.push(r)
              : t
              ? t === n.length - 1
                ? (s.push({ start: r.start, end: r.start + o, isEqual: !0 }),
                  s.push({
                    hasLinesBefore: !1,
                    hasLinesAfter: !0,
                    start: r.start + o,
                    end: e.length,
                    isEqual: !0,
                  }))
                : (s.push({ start: r.start, end: r.start + o, isEqual: !0 }),
                  s.push({
                    hasLinesBefore: !0,
                    hasLinesAfter: !0,
                    start: r.start + o,
                    end: r.end - o,
                    isEqual: !0,
                  }),
                  s.push({ start: r.end - o, end: r.end, isEqual: !0 }))
              : (s.push({
                  hasLinesBefore: !0,
                  hasLinesAfter: !1,
                  start: 0,
                  end: r.end - o,
                  isEqual: !0,
                }),
                s.push({ start: r.end - o, end: r.end, isEqual: !0 }));
          }
          return s;
        };
      function Ln() {
        return (
          (Ln =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          Ln.apply(this, arguments)
        );
      }
      const qn = (e) => {
        var t, r;
        const [n, i] = e.diff,
          a = e.lineNumbers ? `calc(${String(n.length).length}ch + 16px)` : 0;
        var o;
        const s = null != (o = e.indent) ? o : 2,
          l = "tab" === s ? "\t" : " ",
          c = "tab" === s ? 1 : s,
          u = {
            mode:
              (null == (t = e.inlineDiffOptions) ? void 0 : t.mode) || "char",
            wordSeparator:
              (null == (r = e.inlineDiffOptions) ? void 0 : r.wordSeparator) ||
              "",
          };
        var d;
        const f = null != (d = e.hideUnchangedLines) && d,
          {
            scrollContainer: m = "body",
            itemHeight: h = 18,
            expandLineHeight: p = 26,
          } = e.virtual && !0 !== e.virtual ? e.virtual : {},
          y = "body" === m ? document.body : document.querySelector(m),
          g = On.useRef(n),
          b = On.useRef(i),
          v = On.useRef(Xn(n, i, f)),
          B = On.useRef([]),
          w = On.useRef(0),
          _ = On.useRef(null),
          [, M] = On.useState({}),
          S = () => {
            if (((B.current = []), e.virtual)) {
              let e = 0;
              for (const t of v.current)
                Rn(t)
                  ? (B.current.push(e), (e += p))
                  : (B.current.push(e), (e += h * (t.end - t.start)));
              w.current = v.current.reduce(
                (e, t) => (Rn(t) ? e + p : e + (t.end - t.start) * h),
                0,
              );
            }
            M({});
          };
        On.useEffect(() => {
          (g.current = n), (b.current = i), (v.current = Xn(n, i, f)), S();
        }, [f, n, i]),
          On.useEffect(() => {
            if (!e.virtual || !y) return;
            const t = () => M({});
            return (
              y.addEventListener("scroll", t),
              () => {
                y.removeEventListener("scroll", t);
              }
            );
          }, [e.virtual, y]);
        const z = (e) => (t) => {
            const r = [...v.current],
              n = r[e];
            (r[e] = Ln({}, n, { end: Math.max(n.end - t, n.start) })),
              e + 1 < v.current.length - 1 &&
                (r[e + 1] = Ln({}, r[e + 1], {
                  start: Math.max(n.end - t, n.start),
                })),
              (v.current = r),
              S();
          },
          E = (e) => (t) => {
            const r = [...v.current],
              n = r[e];
            (r[e] = Ln({}, n, { start: Math.min(n.start + t, n.end) })),
              e > 1 &&
                (r[e - 1] = Ln({}, r[e - 1], {
                  end: Math.min(n.start + t, n.end),
                })),
              (v.current = r),
              S();
          },
          O = (e) => () => {
            const t = [...v.current],
              r = t[e];
            (t[e] = Ln({}, r, { start: r.start, end: r.start })),
              e + 1 < v.current.length - 1
                ? (t[e + 1] = Ln({}, t[e + 1], { start: r.start }))
                : (t[e - 1] = Ln({}, t[e - 1], { end: r.end })),
              (v.current = t),
              S();
          },
          F = (e, t = [], r = !1, n = !1) =>
            On.createElement(
              On.Fragment,
              null,
              t.map((t, r) => {
                const n = e.slice(t.start, t.end);
                if (!t.type && !t.token) return n;
                const i = [
                  t.type ? `inline-diff-${t.type}` : "",
                  t.token ? `token ${t.token}` : "",
                ]
                  .filter(Boolean)
                  .join(" ");
                return On.createElement(
                  "span",
                  { key: `${r}-${t.type}-${n}`, className: i },
                  n,
                );
              }),
              r &&
                (n
                  ? On.createElement(
                      "span",
                      { className: "token punctuation" },
                      ",",
                    )
                  : ","),
            ),
          R = (t, r) => {
            var n, i;
            const a = g.current[t],
              o = b.current[t],
              [s, d] =
                e.highlightInlineDiff &&
                "modify" === a.type &&
                "modify" === o.type
                  ? ((e, t, r) => {
                      let n = [],
                        i = [],
                        a = 0,
                        o = 0;
                      if ("word" === r.mode) {
                        const s = r.wordSeparator || " ",
                          l = e.split(s),
                          c = t.split(s),
                          u = [...Nn(l, c)],
                          d = s.length,
                          f = An(l, d),
                          m = An(c, d);
                        for (const [e, t, r] of u)
                          e > a &&
                            n.push({ type: "remove", start: f[a], end: f[e] }),
                            t > o &&
                              i.push({ type: "add", start: m[o], end: m[t] }),
                            (a = e + r),
                            (o = t + r),
                            n.push({ start: f[e], end: f[a] }),
                            i.push({ start: m[t], end: m[o] });
                        return (
                          e.length > a &&
                            n.push({
                              type: "remove",
                              start: f[a],
                              end: e.length,
                            }),
                          t.length > o &&
                            i.push({ type: "add", start: m[o], end: t.length }),
                          (n = Dn(n)),
                          (i = Dn(i)),
                          [n, i]
                        );
                      }
                      const s = Nn(e, t);
                      for (const [e, t, r] of s)
                        e > a && n.push({ type: "remove", start: a, end: e }),
                          t > o && i.push({ type: "add", start: o, end: t }),
                          (a = e + r),
                          (o = t + r),
                          n.push({ start: e, end: a }),
                          i.push({ start: t, end: o });
                      return (
                        e.length > a &&
                          n.push({ type: "remove", start: a, end: e.length }),
                        t.length > o &&
                          i.push({ type: "add", start: o, end: t.length }),
                        (n = Dn(n)),
                        (i = Dn(i)),
                        [n, i]
                      );
                    })(a.text, o.text, u)
                  : [[], []],
              f = Un(r, a.text, 0),
              m = Un(r, o.text, 0),
              h = xn(f, s),
              p = xn(m, d);
            var y;
            const v =
              "equal" !== a.type &&
              null != (y = null == (n = e.bgColour) ? void 0 : n[a.type])
                ? y
                : "";
            var B;
            const w =
              "equal" !== o.type &&
              null != (B = null == (i = e.bgColour) ? void 0 : i[o.type])
                ? B
                : "";
            return On.createElement(
              "tr",
              { key: t },
              e.lineNumbers &&
                On.createElement(
                  "td",
                  {
                    className: `line-${a.type} line-number`,
                    style: { backgroundColor: v },
                  },
                  a.lineNumber,
                ),
              On.createElement(
                "td",
                { className: `line-${a.type}`, style: { backgroundColor: v } },
                On.createElement(
                  "pre",
                  null,
                  a.text && l.repeat(a.level * c),
                  F(a.text, h, a.comma, r),
                ),
              ),
              e.lineNumbers &&
                On.createElement(
                  "td",
                  {
                    className: `line-${o.type} line-number`,
                    style: { backgroundColor: w },
                  },
                  o.lineNumber,
                ),
              On.createElement(
                "td",
                { className: `line-${o.type}`, style: { backgroundColor: w } },
                On.createElement(
                  "pre",
                  null,
                  o.text && l.repeat(o.level * c),
                  F(o.text, p, o.comma, r),
                ),
              ),
            );
          },
          j = (e, t, r, n) =>
            On.createElement(
              On.Fragment,
              null,
              e &&
                On.createElement(
                  "button",
                  { onClick: () => z(n)(r) },
                  "⬆️ Show ",
                  r,
                  " lines before",
                ),
              On.createElement(
                "button",
                { onClick: () => O(n)() },
                "↕️ Show all unchanged lines",
              ),
              t &&
                On.createElement(
                  "button",
                  { onClick: () => E(n)(r) },
                  "⬇️ Show ",
                  r,
                  " lines after",
                ),
            ),
          x = (e, t, r, n, i) => {
            let { start: a, end: o } = e;
            if (((a = Math.max(a, r)), (o = Math.min(o, n)), a === o))
              return null;
            if (!Rn(e))
              return Array(o - a)
                .fill(0)
                .map((e, t) => R(a + t, i));
            const { hasLinesBefore: s, hasLinesAfter: l } = e,
              c = "boolean" == typeof f ? 20 : f.expandMoreLinesLimit || 20;
            return [
              On.createElement(
                "tr",
                { key: `expand-line-${t}`, className: "expand-line" },
                On.createElement(
                  "td",
                  {
                    colSpan: 4,
                    className: `${s ? "has-lines-before" : ""} ${
                      l ? "has-lines-after" : ""
                    }`,
                  },
                  "boolean" != typeof f && f.expandLineRenderer
                    ? f.expandLineRenderer({
                        hasLinesBefore: s,
                        hasLinesAfter: l,
                        onExpandBefore: z(t),
                        onExpandAfter: E(t),
                        onExpandAll: O(t),
                      })
                    : j(s, l, c, t),
                ),
              ),
            ];
          },
          C = [
            "json-diff-viewer",
            e.virtual && "json-diff-viewer-virtual",
            e.syntaxHighlight &&
              `json-diff-viewer-theme-${e.syntaxHighlight.theme || "monokai"}`,
            e.className,
          ]
            .filter(Boolean)
            .join(" "),
          T = !!e.syntaxHighlight;
        return On.createElement(
          "table",
          { className: C, style: e.style },
          On.createElement(
            "colgroup",
            { className: "measure-line" },
            e.lineNumbers && On.createElement("col", { style: { width: a } }),
            On.createElement("col", null),
            e.lineNumbers && On.createElement("col", { style: { width: a } }),
            On.createElement("col", null),
          ),
          On.createElement(
            "tbody",
            { ref: _ },
            ((t) => {
              if (!e.virtual)
                return v.current.map((e, r) => x(e, r, 0, g.current.length, t));
              var r;
              const n =
                null != (r = null == y ? void 0 : y.clientHeight) ? r : 0;
              var i;
              const a = null != (i = null == y ? void 0 : y.scrollTop) ? i : 0,
                o = a + n;
              let s = _.current;
              var l;
              let c = null != (l = null == s ? void 0 : s.offsetTop) ? l : 0;
              for (
                ;
                (null == s ? void 0 : s.offsetParent) &&
                (null == s ? void 0 : s.offsetParent) !== y;

              )
                (s = s.offsetParent), (c += s.offsetTop);
              if (c > o || c + w.current < a)
                return On.createElement(
                  "tr",
                  null,
                  On.createElement("td", {
                    colSpan: 4,
                    style: { height: `${w.current}px` },
                  }),
                );
              const u = a - c,
                d = o - c,
                [f, m, b, M] = ((e, t, r, n, i, a) => {
                  if (!t.length) return [0, 0, 0, 0];
                  let o = 0,
                    s = 0,
                    l = 0,
                    c = 0,
                    u = 0,
                    d = e.length - 1;
                  for (;;) {
                    let n = Math.floor((u + d) / 2);
                    if (
                      (t[n] + jn(e[n], i, a) <= r ? (u = n + 1) : (d = n),
                      u === d)
                    ) {
                      o = u;
                      break;
                    }
                  }
                  const f = e[o];
                  for (
                    l = Rn(f) ? f.start : f.start + Math.floor((r - t[o]) / i),
                      u = 0,
                      d = e.length - 1;
                    ;

                  ) {
                    let e = Math.floor((u + d + 1) / 2);
                    if ((t[e] >= n ? (d = e - 1) : (u = e), u === d)) {
                      s = u;
                      break;
                    }
                  }
                  const m = e[s];
                  return (
                    (c = Rn(m) ? m.end : m.start + Math.ceil((n - t[s]) / i)),
                    [o, l, s, c]
                  );
                })(v.current, B.current, u, d, h, p),
                [S, z] = ((e, t, r, n, i, a, o, s, l) => {
                  if (!t.length) return [0, 0];
                  let c = 0,
                    u = 0;
                  const d = e[r];
                  c = Rn(d) ? t[r] : t[r] + (n - d.start) * o;
                  const f = e[i];
                  return (
                    (u = Rn(f) ? l - t[i] - s : l - t[i] - (a - f.start) * o),
                    [c, u]
                  );
                })(v.current, B.current, f, m, b, M, h, p, w.current),
                E = v.current.slice(f, b + 1);
              return E.length
                ? On.createElement(
                    On.Fragment,
                    null,
                    On.createElement(
                      "tr",
                      null,
                      On.createElement("td", {
                        colSpan: 4,
                        style: { height: S, padding: 0 },
                      }),
                    ),
                    E.map((e, r) => x(e, r, m, M, t)),
                    On.createElement(
                      "tr",
                      null,
                      On.createElement("td", {
                        colSpan: 4,
                        style: { height: z, padding: 0 },
                      }),
                    ),
                  )
                : On.createElement(
                    "tr",
                    null,
                    On.createElement("td", {
                      colSpan: 4,
                      style: { height: `${w.current}px` },
                    }),
                  );
            })(T),
          ),
        );
      };
      qn.displayName = "Viewer";
    },
    39234: (e, t, r) => {
      "use strict";
      r.d(t, {
        C: () => s,
        G: () => H,
        J: () => p,
        K: () => y,
        L: () => G,
        M: () => d,
        N: () => te,
        P: () => f,
        _: () => g,
        a: () => h,
        b: () => de,
        c: () => q,
        d: () => L,
        e: () => Y,
        f: () => b,
        g: () => w,
        h: () => c,
        i: () => E,
        j: () => v,
        k: () => V,
        l: () => W,
        m: () => B,
        n: () => D,
        o: () => $,
        p: () => Z,
        q: () => u,
        r: () => M,
        s: () => z,
        t: () => A,
        u: () => fe,
        v: () => ue,
        w: () => me,
        x: () => ae,
        y: () => x,
        z: () => C,
      });
      var n = r(47427);
      function i(e) {
        let t;
        const r = new Set(),
          n = (e, n) => {
            const i = "function" == typeof e ? e(t) : e;
            if (i !== t) {
              const e = t;
              (t = n ? i : Object.assign({}, t, i)), r.forEach((r) => r(t, e));
            }
          },
          i = () => t,
          a = {
            setState: n,
            getState: i,
            subscribe: (e, n, a) =>
              n || a
                ? ((e, n = i, a = Object.is) => {
                    console.warn(
                      "[DEPRECATED] Please use `subscribeWithSelector` middleware",
                    );
                    let o = n(t);
                    function s() {
                      const r = n(t);
                      if (!a(o, r)) {
                        const t = o;
                        e((o = r), t);
                      }
                    }
                    return r.add(s), () => r.delete(s);
                  })(e, n, a)
                : (r.add(e), () => r.delete(e)),
            destroy: () => r.clear(),
          };
        return (t = e(n, i, a)), a;
      }
      const a =
        "undefined" == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
          ? n.useEffect
          : n.useLayoutEffect;
      function o(e) {
        const t = "function" == typeof e ? i(e) : e,
          r = (e = t.getState, r = Object.is) => {
            const [, i] = (0, n.useReducer)((e) => e + 1, 0),
              o = t.getState(),
              s = (0, n.useRef)(o),
              l = (0, n.useRef)(e),
              c = (0, n.useRef)(r),
              u = (0, n.useRef)(!1),
              d = (0, n.useRef)();
            let f;
            void 0 === d.current && (d.current = e(o));
            let m = !1;
            (s.current !== o ||
              l.current !== e ||
              c.current !== r ||
              u.current) &&
              ((f = e(o)), (m = !r(d.current, f))),
              a(() => {
                m && (d.current = f),
                  (s.current = o),
                  (l.current = e),
                  (c.current = r),
                  (u.current = !1);
              });
            const h = (0, n.useRef)(o);
            a(() => {
              const e = () => {
                  try {
                    const e = t.getState(),
                      r = l.current(e);
                    c.current(d.current, r) ||
                      ((s.current = e), (d.current = r), i());
                  } catch (e) {
                    (u.current = !0), i();
                  }
                },
                r = t.subscribe(e);
              return t.getState() !== h.current && e(), r;
            }, []);
            const p = m ? f : d.current;
            return (0, n.useDebugValue)(p), p;
          };
        return (
          Object.assign(r, t),
          (r[Symbol.iterator] = function () {
            console.warn(
              "[useStore, api] = create() is deprecated and will be removed in v4",
            );
            const e = [r, t];
            return {
              next() {
                const t = e.length <= 0;
                return { value: e.shift(), done: t };
              },
            };
          }),
          r
        );
      }
      var s,
        l,
        c,
        u,
        d,
        f,
        m = r(96295);
      function h(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function y(e, t) {
        if (e) {
          if ("string" == typeof e) return p(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? p(e, t)
              : void 0
          );
        }
      }
      function g(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                i,
                a = [],
                o = !0,
                s = !1;
              try {
                for (
                  r = r.call(e);
                  !(o = (n = r.next()).done) &&
                  (a.push(n.value), !t || a.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (i = e);
              } finally {
                try {
                  o || null == r.return || r.return();
                } finally {
                  if (s) throw i;
                }
              }
              return a;
            }
          })(e, t) ||
          y(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      !(function (e) {
        (e.Strict = "strict"), (e.Loose = "loose");
      })(s || (s = {})),
        (function (e) {
          (e.Lines = "lines"), (e.Dots = "dots");
        })(l || (l = {})),
        (function (e) {
          (e.Free = "free"),
            (e.Vertical = "vertical"),
            (e.Horizontal = "horizontal");
        })(c || (c = {})),
        (function (e) {
          (e.Bezier = "default"),
            (e.Straight = "straight"),
            (e.Step = "step"),
            (e.SmoothStep = "smoothstep"),
            (e.SimpleBezier = "simplebezier");
        })(u || (u = {})),
        (function (e) {
          (e.Arrow = "arrow"), (e.ArrowClosed = "arrowclosed");
        })(d || (d = {})),
        (function (e) {
          (e.Left = "left"),
            (e.Top = "top"),
            (e.Right = "right"),
            (e.Bottom = "bottom");
        })(f || (f = {}));
      var b = function (e) {
          return { width: e.offsetWidth, height: e.offsetHeight };
        },
        v = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1;
          return Math.min(Math.max(e, t), r);
        },
        B = function (e, t) {
          return { x: v(e.x, t[0][0], t[1][0]), y: v(e.y, t[0][1], t[1][1]) };
        },
        w = function (e) {
          var t, r;
          return (
            (null === (t = e.getRootNode) || void 0 === t
              ? void 0
              : t.call(e)) ||
            (null === (r = window) || void 0 === r ? void 0 : r.document)
          );
        },
        _ = function (e, t) {
          return {
            x: Math.min(e.x, t.x),
            y: Math.min(e.y, t.y),
            x2: Math.max(e.x2, t.x2),
            y2: Math.max(e.y2, t.y2),
          };
        },
        M = function (e) {
          var t = e.x,
            r = e.y;
          return { x: t, y: r, x2: t + e.width, y2: r + e.height };
        },
        S = function (e) {
          var t = e.x,
            r = e.y;
          return { x: t, y: r, width: e.x2 - t, height: e.y2 - r };
        },
        z = function (e) {
          return !isNaN(e) && isFinite(e);
        },
        E = Symbol("internals");
      function O(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(r), !0).forEach(function (t) {
                h(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : O(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function R(e, t) {
        var r = e.find(function (e) {
          return e.id === t.parentNode;
        });
        if (r) {
          var n = t.position.x + t.width - r.width,
            i = t.position.y + t.height - r.height;
          if (n > 0 || i > 0 || t.position.x < 0 || t.position.y < 0) {
            var a, o;
            if (
              ((r.style = F({}, r.style) || {}),
              (r.style.width =
                null !== (a = r.style.width) && void 0 !== a ? a : r.width),
              (r.style.height =
                null !== (o = r.style.height) && void 0 !== o ? o : r.height),
              n > 0 && (r.style.width += n),
              i > 0 && (r.style.height += i),
              t.position.x < 0)
            ) {
              var s = Math.abs(t.position.x);
              (r.position.x = r.position.x - s),
                (r.style.width += s),
                (t.position.x = 0);
            }
            if (t.position.y < 0) {
              var l = Math.abs(t.position.y);
              (r.position.y = r.position.y - l),
                (r.style.height += l),
                (t.position.y = 0);
            }
            (r.width = r.style.width), (r.height = r.style.height);
          }
        }
      }
      function j(e, t) {
        if (
          e.some(function (e) {
            return "reset" === e.type;
          })
        )
          return e
            .filter(function (e) {
              return "reset" === e.type;
            })
            .map(function (e) {
              return e.item;
            });
        var r = e
          .filter(function (e) {
            return "add" === e.type;
          })
          .map(function (e) {
            return e.item;
          });
        return t.reduce(function (t, r) {
          var n = e.find(function (e) {
            return e.id === r.id;
          });
          if (n)
            switch (n.type) {
              case "select":
                return t.push(F(F({}, r), {}, { selected: n.selected })), t;
              case "position":
                var i = F({}, r);
                return (
                  void 0 !== n.position && (i.position = n.position),
                  void 0 !== n.positionAbsolute &&
                    (i.positionAbsolute = n.positionAbsolute),
                  void 0 !== n.dragging && (i.dragging = n.dragging),
                  i.expandParent && R(t, i),
                  t.push(i),
                  t
                );
              case "dimensions":
                var a = F({}, r);
                return (
                  void 0 !== n.dimensions &&
                    ((a.width = n.dimensions.width),
                    (a.height = n.dimensions.height)),
                  a.expandParent && R(t, a),
                  t.push(a),
                  t
                );
              case "remove":
                return t;
            }
          return t.push(r), t;
        }, r);
      }
      function x(e, t) {
        return j(e, t);
      }
      function C(e, t) {
        return j(e, t);
      }
      var T = function (e, t) {
        return { id: e, type: "select", selected: t };
      };
      function W(e, t) {
        return e.reduce(function (e, r) {
          var n = t.includes(r.id);
          return (
            !r.selected && n
              ? ((r.selected = !0), e.push(T(r.id, !0)))
              : r.selected && !n && ((r.selected = !1), e.push(T(r.id, !1))),
            e
          );
        }, []);
      }
      function P(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(r), !0).forEach(function (t) {
                h(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : P(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      var N = function (e, t, r) {
        var n = t.querySelectorAll(e);
        if (!n || !n.length) return null;
        var i = Array.from(n),
          a = t.getBoundingClientRect();
        return i.map(function (e) {
          var t = e.getBoundingClientRect();
          return I(
            {
              id: e.getAttribute("data-handleid"),
              position: e.getAttribute("data-handlepos"),
              x: (t.left - a.left) / r,
              y: (t.top - a.top) / r,
            },
            b(e),
          );
        });
      };
      function A(e, t, r) {
        return void 0 === r
          ? r
          : function (n) {
              var i = t().nodeInternals.get(e);
              r(n, I({}, i));
            };
      }
      function D(e) {
        var t = e.id,
          r = e.store,
          n = r.getState(),
          i = n.addSelectedNodes,
          a = n.unselectNodesAndEdges,
          o = n.multiSelectionActive,
          s = n.nodeInternals.get(t);
        r.setState({ nodesSelectionActive: !1 }),
          s.selected ? s.selected && o && a({ nodes: [s] }) : i([t]);
      }
      function U(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? U(Object(r), !0).forEach(function (t) {
                h(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : U(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      var X = function (e) {
          var t = e.source,
            r = e.sourceHandle,
            n = e.target,
            i = e.targetHandle;
          return "reactflow__edge-"
            .concat(t)
            .concat(r || "", "-")
            .concat(n)
            .concat(i || "");
        },
        L = function (e, t) {
          if (void 0 === e) return "";
          if ("string" == typeof e) return e;
          var r = t ? "".concat(t, "__") : "";
          return "".concat(r).concat(
            Object.keys(e)
              .sort()
              .map(function (t) {
                return "".concat(t, "=").concat(e[t]);
              })
              .join("&"),
          );
        },
        q = function (e, t) {
          return e.source && e.target
            ? (function (e, t) {
                return t.some(function (t) {
                  return !(
                    t.source !== e.source ||
                    t.target !== e.target ||
                    (t.sourceHandle !== e.sourceHandle &&
                      (t.sourceHandle || e.sourceHandle)) ||
                    (t.targetHandle !== e.targetHandle &&
                      (t.targetHandle || e.targetHandle))
                  );
                });
              })(
                (r =
                  "id" in (n = e) && "source" in n && "target" in n
                    ? k({}, e)
                    : k(k({}, e), {}, { id: X(e) })),
                t,
              )
              ? t
              : t.concat(r)
            : t;
          var r, n;
        },
        Z = function (e, t, r, n) {
          var i = e.x,
            a = e.y,
            o = g(t, 3),
            s = o[0],
            l = o[1],
            c = o[2],
            u = g(n, 2),
            d = u[0],
            f = u[1],
            m = { x: (i - s) / c, y: (a - l) / c };
          return r
            ? { x: d * Math.round(m.x / d), y: f * Math.round(m.y / f) }
            : m;
        },
        $ = function (e) {
          if (0 === e.length) return { x: 0, y: 0, width: 0, height: 0 };
          var t = e.reduce(
            function (e, t) {
              var r = t.positionAbsolute,
                n = t.position,
                i = t.width,
                a = t.height;
              return _(
                e,
                M({
                  x: r ? r.x : n.x,
                  y: r ? r.y : n.y,
                  width: i || 0,
                  height: a || 0,
                }),
              );
            },
            { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
          );
          return S(t);
        },
        V = function (e, t) {
          var r = g(
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [0, 0, 1],
              3,
            ),
            n = r[0],
            i = r[1],
            a = r[2],
            o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            l = M({
              x: (t.x - n) / a,
              y: (t.y - i) / a,
              width: t.width / a,
              height: t.height / a,
            }),
            c = [];
          return (
            e.forEach(function (e) {
              var t = e.positionAbsolute,
                r = e.width,
                n = e.height,
                i = e.selectable;
              if (s && !(void 0 === i || i)) return !1;
              var a = M(k(k({}, t), {}, { width: r || 0, height: n || 0 })),
                u = Math.max(0, Math.min(l.x2, a.x2) - Math.max(l.x, a.x)),
                d = Math.max(0, Math.min(l.y2, a.y2) - Math.max(l.y, a.y)),
                f = Math.ceil(u * d);
              (void 0 === r ||
                void 0 === n ||
                null === r ||
                null === n ||
                (o && f > 0) ||
                f >= (r || 0) * (n || 0)) &&
                c.push(e);
            }),
            c
          );
        },
        Y = function (e, t) {
          var r = e.map(function (e) {
            return e.id;
          });
          return t.filter(function (e) {
            return r.includes(e.source) || r.includes(e.target);
          });
        },
        H = function (e, t, r, n, i) {
          var a =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : 0.1,
            o = t / (e.width * (1 + a)),
            s = r / (e.height * (1 + a)),
            l = Math.min(o, s),
            c = v(l, n, i);
          return [
            t / 2 - (e.x + e.width / 2) * c,
            r / 2 - (e.y + e.height / 2) * c,
            c,
          ];
        },
        G = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return e.transition().duration(t);
        };
      function K(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(r), !0).forEach(function (t) {
                h(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : K(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function J(e, t, r, n) {
        var i, a, o, s, l, c, u, d, f, m, h, p;
        if (!e.parentNode) return n;
        var y = t.get(e.parentNode);
        return J(y, t, r, {
          x:
            (null !== (i = n.x) && void 0 !== i ? i : 0) +
            (null !==
              (a = null === (o = y.position) || void 0 === o ? void 0 : o.x) &&
            void 0 !== a
              ? a
              : 0),
          y:
            (null !== (s = n.y) && void 0 !== s ? s : 0) +
            (null !==
              (l = null === (c = y.position) || void 0 === c ? void 0 : c.y) &&
            void 0 !== l
              ? l
              : 0),
          z:
            (null !==
              (u = null === (d = y[E]) || void 0 === d ? void 0 : d.z) &&
            void 0 !== u
              ? u
              : 0) > (null !== (f = n.z) && void 0 !== f ? f : 0)
              ? null !==
                  (m = null === (h = y[E]) || void 0 === h ? void 0 : h.z) &&
                void 0 !== m
                ? m
                : 0
              : null !== (p = n.z) && void 0 !== p
              ? p
              : 0,
        });
      }
      function ee(e, t) {
        var r = new Map(),
          n = {};
        return (
          e.forEach(function (e) {
            var i,
              a = z(e.zIndex) ? e.zIndex : e.selected ? 1e3 : 0,
              o = t.get(e.id),
              s = Q(
                Q(
                  {
                    width: null == o ? void 0 : o.width,
                    height: null == o ? void 0 : o.height,
                  },
                  e,
                ),
                {},
                { positionAbsolute: { x: e.position.x, y: e.position.y } },
              );
            e.parentNode &&
              ((s.parentNode = e.parentNode), (n[e.parentNode] = !0)),
              Object.defineProperty(s, E, {
                enumerable: !1,
                value: {
                  handleBounds:
                    null == o || null === (i = o[E]) || void 0 === i
                      ? void 0
                      : i.handleBounds,
                  z: a,
                },
              }),
              r.set(e.id, s);
          }),
          r.forEach(function (e) {
            if (e.parentNode && !r.has(e.parentNode))
              throw new Error(
                "Parent node ".concat(e.parentNode, " not found"),
              );
            if (e.parentNode || n[e.id]) {
              var t,
                i,
                a = J(
                  e,
                  r,
                  n,
                  Q(
                    Q({}, e.position),
                    {},
                    {
                      z:
                        null !==
                          (t =
                            null === (i = e[E]) || void 0 === i
                              ? void 0
                              : i.z) && void 0 !== t
                          ? t
                          : 0,
                    },
                  ),
                ),
                o = a.x,
                s = a.y,
                l = a.z;
              (e.positionAbsolute = { x: o, y: s }),
                (e[E].z = l),
                n[e.id] && (e[E].isParent = !0);
            }
          }),
          r
        );
      }
      function te(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = e(),
          n = r.nodeInternals,
          i = r.width,
          a = r.height,
          o = r.minZoom,
          s = r.maxZoom,
          l = r.d3Zoom,
          c = r.d3Selection,
          u = r.fitViewOnInitDone,
          d = r.fitViewOnInit;
        if (((t.initial && !u && d) || !t.initial) && l && c) {
          var f = Array.from(n.values()).filter(function (e) {
              return t.includeHiddenNodes ? e.width && e.height : !e.hidden;
            }),
            h = f.every(function (e) {
              return e.width && e.height;
            });
          if (f.length > 0 && h) {
            var p,
              y,
              b,
              v = $(f),
              B = g(
                H(
                  v,
                  i,
                  a,
                  null !== (p = t.minZoom) && void 0 !== p ? p : o,
                  null !== (y = t.maxZoom) && void 0 !== y ? y : s,
                  null !== (b = t.padding) && void 0 !== b ? b : 0.1,
                ),
                3,
              ),
              w = B[0],
              _ = B[1],
              M = B[2],
              S = m.CR.translate(w, _).scale(M);
            return (
              "number" == typeof t.duration && t.duration > 0
                ? l.transform(G(c, t.duration), S)
                : l.transform(c, S),
              !0
            );
          }
        }
        return !1;
      }
      function re(e, t) {
        return (
          e.forEach(function (e) {
            var r,
              n = t.get(e.id);
            n &&
              t.set(
                n.id,
                Q(
                  Q({}, n),
                  {},
                  (h((r = {}), E, n[E]), h(r, "selected", e.selected), r),
                ),
              );
          }),
          new Map(t)
        );
      }
      function ne(e, t) {
        return t.map(function (t) {
          var r = e.find(function (e) {
            return e.id === t.id;
          });
          return r && (t.selected = r.selected), t;
        });
      }
      function ie(e) {
        var t = e.changedNodes,
          r = e.changedEdges,
          n = e.get,
          i = e.set,
          a = n(),
          o = a.nodeInternals,
          s = a.edges,
          l = a.onNodesChange,
          c = a.onEdgesChange,
          u = a.hasDefaultNodes,
          d = a.hasDefaultEdges;
        null != t &&
          t.length &&
          (u && i({ nodeInternals: re(t, o) }), null == l || l(t)),
          null != r &&
            r.length &&
            (d && i({ edges: ne(r, s) }), null == c || c(r));
      }
      var ae = [
          [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
          [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
        ],
        oe = {
          width: 0,
          height: 0,
          transform: [0, 0, 1],
          nodeInternals: new Map(),
          edges: [],
          onNodesChange: null,
          onEdgesChange: null,
          hasDefaultNodes: !1,
          hasDefaultEdges: !1,
          d3Zoom: null,
          d3Selection: null,
          d3ZoomHandler: void 0,
          minZoom: 0.5,
          maxZoom: 2,
          translateExtent: ae,
          nodeExtent: ae,
          nodesSelectionActive: !1,
          userSelectionActive: !1,
          connectionNodeId: null,
          connectionHandleId: null,
          connectionHandleType: "source",
          connectionPosition: { x: 0, y: 0 },
          connectionMode: s.Strict,
          domNode: null,
          snapGrid: [15, 15],
          snapToGrid: !1,
          nodesDraggable: !0,
          nodesConnectable: !0,
          elementsSelectable: !0,
          fitViewOnInit: !1,
          fitViewOnInitDone: !1,
          fitViewOnInitOptions: void 0,
          multiSelectionActive: !1,
          reactFlowVersion: "10.3.17",
          connectionStartHandle: null,
          connectOnClick: !0,
        };
      function se(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? se(Object(r), !0).forEach(function (t) {
                h(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : se(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      var ce = (function () {
          const e = (0, n.createContext)(void 0);
          return {
            Provider: ({ initialStore: t, createStore: r, children: i }) => {
              const a = (0, n.useRef)();
              return (
                a.current ||
                  (t &&
                    (console.warn(
                      "Provider initialStore is deprecated and will be removed in the next version.",
                    ),
                    r || (r = () => t)),
                  (a.current = r())),
                (0, n.createElement)(e.Provider, { value: a.current }, i)
              );
            },
            useStore: (t, r = Object.is) => {
              const i = (0, n.useContext)(e);
              if (!i)
                throw new Error(
                  "Seems like you have not used zustand provider as an ancestor.",
                );
              return i(t, r);
            },
            useStoreApi: () => {
              const t = (0, n.useContext)(e);
              if (!t)
                throw new Error(
                  "Seems like you have not used zustand provider as an ancestor.",
                );
              return (0, n.useMemo)(
                () => ({
                  getState: t.getState,
                  setState: t.setState,
                  subscribe: t.subscribe,
                  destroy: t.destroy,
                }),
                [t],
              );
            },
          };
        })(),
        ue = ce.Provider,
        de = ce.useStore,
        fe = ce.useStoreApi,
        me = function () {
          return o(function (e, t) {
            return le(
              le({}, oe),
              {},
              {
                setNodes: function (r) {
                  e({ nodeInternals: ee(r, t().nodeInternals) });
                },
                setEdges: function (r) {
                  var n = t().defaultEdgeOptions,
                    i = void 0 === n ? {} : n;
                  e({
                    edges: r.map(function (e) {
                      return le(le({}, i), e);
                    }),
                  });
                },
                setDefaultNodesAndEdges: function (t, r) {
                  var n = void 0 !== t,
                    i = void 0 !== r,
                    a = n ? ee(t, new Map()) : new Map();
                  e({
                    nodeInternals: a,
                    edges: i ? r : [],
                    hasDefaultNodes: n,
                    hasDefaultEdges: i,
                  });
                },
                updateNodeDimensions: function (r) {
                  var n = t(),
                    i = n.onNodesChange,
                    a = n.nodeInternals,
                    o = n.fitViewOnInit,
                    s = n.fitViewOnInitDone,
                    l = n.fitViewOnInitOptions,
                    c = n.domNode,
                    u =
                      null == c
                        ? void 0
                        : c.querySelector(".react-flow__viewport");
                  if (u) {
                    var d = window.getComputedStyle(u),
                      f = new window.DOMMatrixReadOnly(d.transform).m22,
                      m = r.reduce(function (e, t) {
                        var r = a.get(t.id);
                        if (r) {
                          var n = b(t.nodeElement);
                          !(
                            !n.width ||
                            !n.height ||
                            (r.width === n.width &&
                              r.height === n.height &&
                              !t.forceUpdate)
                          ) &&
                            (a.set(
                              r.id,
                              le(
                                le({}, r),
                                {},
                                h(
                                  {},
                                  E,
                                  le(
                                    le({}, r[E]),
                                    {},
                                    {
                                      handleBounds: {
                                        source: N(".source", t.nodeElement, f),
                                        target: N(".target", t.nodeElement, f),
                                      },
                                    },
                                  ),
                                ),
                                n,
                              ),
                            ),
                            e.push({
                              id: r.id,
                              type: "dimensions",
                              dimensions: n,
                            }));
                        }
                        return e;
                      }, []),
                      p = s || (o && !s && te(t, le({ initial: !0 }, l)));
                    e({ nodeInternals: new Map(a), fitViewOnInitDone: p }),
                      (null == m ? void 0 : m.length) > 0 &&
                        (null == i || i(m));
                  }
                },
                updateNodePositions: function (r) {
                  var n =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    i =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    a = t(),
                    o = a.onNodesChange,
                    s = a.nodeInternals,
                    l = a.hasDefaultNodes;
                  if (l || o) {
                    var c = r.map(function (e) {
                      var t = { id: e.id, type: "position", dragging: i };
                      return (
                        n &&
                          ((t.positionAbsolute = e.positionAbsolute),
                          (t.position = e.position)),
                        t
                      );
                    });
                    if (null != c && c.length) {
                      if (l) {
                        var u = ee(x(c, Array.from(s.values())), s);
                        e({ nodeInternals: u });
                      }
                      null == o || o(c);
                    }
                  }
                },
                addSelectedNodes: function (r) {
                  var n,
                    i = t(),
                    a = i.multiSelectionActive,
                    o = i.nodeInternals,
                    s = i.edges,
                    l = null;
                  a
                    ? (n = r.map(function (e) {
                        return T(e, !0);
                      }))
                    : ((n = W(Array.from(o.values()), r)), (l = W(s, []))),
                    ie({ changedNodes: n, changedEdges: l, get: t, set: e });
                },
                addSelectedEdges: function (r) {
                  var n,
                    i = t(),
                    a = i.multiSelectionActive,
                    o = i.edges,
                    s = i.nodeInternals,
                    l = null;
                  a
                    ? (n = r.map(function (e) {
                        return T(e, !0);
                      }))
                    : ((n = W(o, r)), (l = W(Array.from(s.values()), []))),
                    ie({ changedNodes: l, changedEdges: n, get: t, set: e });
                },
                unselectNodesAndEdges: function () {
                  var r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n = r.nodes,
                    i = r.edges,
                    a = t(),
                    o = a.nodeInternals,
                    s = a.edges,
                    l = i || s;
                  ie({
                    changedNodes: (n || Array.from(o.values())).map(
                      function (e) {
                        return (e.selected = !1), T(e.id, !1);
                      },
                    ),
                    changedEdges: l.map(function (e) {
                      return T(e.id, !1);
                    }),
                    get: t,
                    set: e,
                  });
                },
                setMinZoom: function (r) {
                  var n = t(),
                    i = n.d3Zoom,
                    a = n.maxZoom;
                  null == i || i.scaleExtent([r, a]), e({ minZoom: r });
                },
                setMaxZoom: function (r) {
                  var n = t(),
                    i = n.d3Zoom,
                    a = n.minZoom;
                  null == i || i.scaleExtent([a, r]), e({ maxZoom: r });
                },
                setTranslateExtent: function (r) {
                  var n = t().d3Zoom;
                  null == n || n.translateExtent(r), e({ translateExtent: r });
                },
                resetSelectedElements: function () {
                  var r = t(),
                    n = r.nodeInternals,
                    i = r.edges;
                  ie({
                    changedNodes: Array.from(n.values())
                      .filter(function (e) {
                        return e.selected;
                      })
                      .map(function (e) {
                        return T(e.id, !1);
                      }),
                    changedEdges: i
                      .filter(function (e) {
                        return e.selected;
                      })
                      .map(function (e) {
                        return T(e.id, !1);
                      }),
                    get: t,
                    set: e,
                  });
                },
                setNodeExtent: function (r) {
                  var n = t().nodeInternals;
                  n.forEach(function (e) {
                    e.positionAbsolute = B(e.position, r);
                  }),
                    e({ nodeExtent: r, nodeInternals: new Map(n) });
                },
                reset: function () {
                  return e(le({}, oe));
                },
              },
            );
          });
        };
    },
    95791: (e, t, r) => {
      "use strict";
      r.d(t, {
        HH: () => Ee,
        tV: () => br,
        ZP: () => gr,
        ll: () => wr,
        Rr: () => Br,
      });
      var n = r(39234),
        i = r(47427);
      function a(e) {
        if ("string" == typeof e || "number" == typeof e) return "" + e;
        let t = "";
        if (Array.isArray(e))
          for (let r, n = 0; n < e.length; n++)
            "" !== (r = a(e[n])) && (t += (t && " ") + r);
        else for (let r in e) e[r] && (t += (t && " ") + r);
        return t;
      }
      var o = r(96295);
      function s(e, t) {
        if (Object.is(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        const r = Object.keys(e);
        if (r.length !== Object.keys(t).length) return !1;
        for (let n = 0; n < r.length; n++)
          if (
            !Object.prototype.hasOwnProperty.call(t, r[n]) ||
            !Object.is(e[r[n]], t[r[n]])
          )
            return !1;
        return !0;
      }
      function l(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, n.J)(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (0, n.K)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var c = {
          zoomIn: function () {},
          zoomOut: function () {},
          zoomTo: function (e) {},
          getZoom: function () {
            return 1;
          },
          setViewport: function (e) {},
          getViewport: function () {
            return { x: 0, y: 0, zoom: 1 };
          },
          fitView: function () {},
          setCenter: function (e, t) {},
          fitBounds: function (e) {},
          project: function (e) {
            return e;
          },
          viewportInitialized: !1,
        },
        u = function (e) {
          return { d3Zoom: e.d3Zoom, d3Selection: e.d3Selection };
        },
        d = function () {
          var e = (0, n.u)(),
            t = (0, n.b)(u, s),
            r = t.d3Zoom,
            a = t.d3Selection;
          return (0, i.useMemo)(
            function () {
              return a && r
                ? {
                    zoomIn: function (e) {
                      return r.scaleBy(
                        (0, n.L)(a, null == e ? void 0 : e.duration),
                        1.2,
                      );
                    },
                    zoomOut: function (e) {
                      return r.scaleBy(
                        (0, n.L)(a, null == e ? void 0 : e.duration),
                        1 / 1.2,
                      );
                    },
                    zoomTo: function (e, t) {
                      return r.scaleTo(
                        (0, n.L)(a, null == t ? void 0 : t.duration),
                        e,
                      );
                    },
                    getZoom: function () {
                      return e.getState().transform[2];
                    },
                    setViewport: function (t, i) {
                      var s,
                        l,
                        c,
                        u = (0, n._)(e.getState().transform, 3),
                        d = u[0],
                        f = u[1],
                        m = u[2],
                        h = o.CR.translate(
                          null !== (s = t.x) && void 0 !== s ? s : d,
                          null !== (l = t.y) && void 0 !== l ? l : f,
                        ).scale(null !== (c = t.zoom) && void 0 !== c ? c : m);
                      r.transform(
                        (0, n.L)(a, null == i ? void 0 : i.duration),
                        h,
                      );
                    },
                    getViewport: function () {
                      var t = (0, n._)(e.getState().transform, 3);
                      return { x: t[0], y: t[1], zoom: t[2] };
                    },
                    fitView: function (t) {
                      return (0, n.N)(e.getState, t);
                    },
                    setCenter: function (t, i, s) {
                      var l = e.getState(),
                        c = l.width,
                        u = l.height,
                        d = l.maxZoom,
                        f =
                          void 0 !== (null == s ? void 0 : s.zoom) ? s.zoom : d,
                        m = c / 2 - t * f,
                        h = u / 2 - i * f,
                        p = o.CR.translate(m, h).scale(f);
                      r.transform(
                        (0, n.L)(a, null == s ? void 0 : s.duration),
                        p,
                      );
                    },
                    fitBounds: function (t, i) {
                      var s,
                        l = e.getState(),
                        c = l.width,
                        u = l.height,
                        d = l.minZoom,
                        f = l.maxZoom,
                        m = (0, n.G)(
                          t,
                          c,
                          u,
                          d,
                          f,
                          null !== (s = null == i ? void 0 : i.padding) &&
                            void 0 !== s
                            ? s
                            : 0.1,
                        ),
                        h = (0, n._)(m, 3),
                        p = h[0],
                        y = h[1],
                        g = h[2],
                        b = o.CR.translate(p, y).scale(g);
                      r.transform(
                        (0, n.L)(a, null == i ? void 0 : i.duration),
                        b,
                      );
                    },
                    project: function (t) {
                      var r = e.getState(),
                        i = r.transform,
                        a = r.snapToGrid,
                        o = r.snapGrid;
                      return (0, n.p)(t, i, a, o);
                    },
                    viewportInitialized: !0,
                  }
                : c;
            },
            [r, a],
          );
        };
      function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function h() {
        var e = d(),
          t = (0, n.u)(),
          r = (0, i.useCallback)(function () {
            var e = t.getState().nodeInternals;
            return Array.from(e.values()).map(function (e) {
              return m({}, e);
            });
          }, []),
          a = (0, i.useCallback)(function (e) {
            return t.getState().nodeInternals.get(e);
          }, []),
          o = (0, i.useCallback)(function () {
            var e = t.getState().edges;
            return (void 0 === e ? [] : e).map(function (e) {
              return m({}, e);
            });
          }, []),
          s = (0, i.useCallback)(function (e) {
            var r = t.getState().edges;
            return (void 0 === r ? [] : r).find(function (t) {
              return t.id === e;
            });
          }, []),
          c = (0, i.useCallback)(function (e) {
            var r = t.getState(),
              n = r.nodeInternals,
              i = r.setNodes,
              a = r.hasDefaultNodes,
              o = r.onNodesChange,
              s = Array.from(n.values()),
              l = "function" == typeof e ? e(s) : e;
            if (a) i(l);
            else if (o) {
              o(
                0 === l.length
                  ? s.map(function (e) {
                      return { type: "remove", id: e.id };
                    })
                  : l.map(function (e) {
                      return { item: e, type: "reset" };
                    }),
              );
            }
          }, []),
          u = (0, i.useCallback)(function (e) {
            var r = t.getState(),
              n = r.edges,
              i = void 0 === n ? [] : n,
              a = r.setEdges,
              o = r.hasDefaultEdges,
              s = r.onEdgesChange,
              l = "function" == typeof e ? e(i) : e;
            if (o) a(l);
            else if (s) {
              s(
                0 === l.length
                  ? i.map(function (e) {
                      return { type: "remove", id: e.id };
                    })
                  : l.map(function (e) {
                      return { item: e, type: "reset" };
                    }),
              );
            }
          }, []),
          f = (0, i.useCallback)(function (e) {
            var r = Array.isArray(e) ? e : [e],
              n = t.getState(),
              i = n.nodeInternals,
              a = n.setNodes,
              o = n.hasDefaultNodes,
              s = n.onNodesChange;
            if (o) {
              var c = Array.from(i.values());
              a([].concat(c, l(r)));
            } else if (s) {
              s(
                r.map(function (e) {
                  return { item: e, type: "add" };
                }),
              );
            }
          }, []),
          h = (0, i.useCallback)(function (e) {
            var r = Array.isArray(e) ? e : [e],
              n = t.getState(),
              i = n.edges,
              a = void 0 === i ? [] : i,
              o = n.setEdges,
              s = n.hasDefaultEdges,
              c = n.onEdgesChange;
            if (s) o([].concat(l(a), l(r)));
            else if (c) {
              c(
                r.map(function (e) {
                  return { item: e, type: "add" };
                }),
              );
            }
          }, []),
          p = (0, i.useCallback)(function () {
            var e = t.getState(),
              r = e.nodeInternals,
              i = e.edges,
              a = void 0 === i ? [] : i,
              o = e.transform,
              s = Array.from(r.values()),
              l = (0, n._)(o, 3),
              c = l[0],
              u = l[1],
              d = l[2];
            return {
              nodes: s.map(function (e) {
                return m({}, e);
              }),
              edges: a.map(function (e) {
                return m({}, e);
              }),
              viewport: { x: c, y: u, zoom: d },
            };
          }, []);
        return (0, i.useMemo)(
          function () {
            return m(
              m({}, e),
              {},
              {
                getNodes: r,
                getNode: a,
                getEdges: o,
                getEdge: s,
                setNodes: c,
                setEdges: u,
                addNodes: f,
                addEdges: h,
                toObject: p,
              },
            );
          },
          [e, r, a, o, s, c, u, f, h, p],
        );
      }
      function p(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      function y() {
        return i.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
          i.createElement("path", {
            d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z",
          }),
        );
      }
      function g() {
        return i.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5" },
          i.createElement("path", { d: "M0 0h32v4.2H0z" }),
        );
      }
      function b() {
        return i.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30" },
          i.createElement("path", {
            d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z",
          }),
        );
      }
      function v() {
        return i.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32" },
          i.createElement("path", {
            d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z",
          }),
        );
      }
      function B() {
        return i.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32" },
          i.createElement("path", {
            d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z",
          }),
        );
      }
      var w = ["children", "className"];
      function _(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var M = function (e) {
          var t = e.children,
            r = e.className,
            o = p(e, w);
          return i.createElement(
            "button",
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? _(Object(r), !0).forEach(function (t) {
                      (0, n.a)(e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r),
                    )
                  : _(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t),
                      );
                    });
              }
              return e;
            })(
              {
                type: "button",
                className: a(["react-flow__controls-button", r]),
              },
              o,
            ),
            t,
          );
        },
        S = function (e) {
          return e.nodesDraggable && e.nodesConnectable && e.elementsSelectable;
        },
        z = function (e) {
          var t = e.style,
            r = e.showZoom,
            o = void 0 === r || r,
            s = e.showFitView,
            l = void 0 === s || s,
            c = e.showInteractive,
            u = void 0 === c || c,
            d = e.fitViewOptions,
            f = e.onZoomIn,
            m = e.onZoomOut,
            p = e.onFitView,
            w = e.onInteractiveChange,
            _ = e.className,
            z = e.children,
            E = (0, n.u)(),
            O = (0, i.useState)(!1),
            F = (0, n._)(O, 2),
            R = F[0],
            j = F[1],
            x = (0, n.b)(S),
            C = h(),
            T = C.zoomIn,
            W = C.zoomOut,
            P = C.fitView;
          if (
            ((0, i.useEffect)(function () {
              j(!0);
            }, []),
            !R)
          )
            return null;
          return i.createElement(
            "div",
            { className: a(["react-flow__controls", _]), style: t },
            o &&
              i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  M,
                  {
                    onClick: function () {
                      null == T || T(), null == f || f();
                    },
                    className: "react-flow__controls-zoomin",
                    title: "zoom in",
                    "aria-label": "zoom in",
                  },
                  i.createElement(y, null),
                ),
                i.createElement(
                  M,
                  {
                    onClick: function () {
                      null == W || W(), null == m || m();
                    },
                    className: "react-flow__controls-zoomout",
                    title: "zoom out",
                    "aria-label": "zoom out",
                  },
                  i.createElement(g, null),
                ),
              ),
            l &&
              i.createElement(
                M,
                {
                  className: "react-flow__controls-fitview",
                  onClick: function () {
                    null == P || P(d), null == p || p();
                  },
                  title: "fit view",
                  "aria-label": "fit view",
                },
                i.createElement(b, null),
              ),
            u &&
              i.createElement(
                M,
                {
                  className: "react-flow__controls-interactive",
                  onClick: function () {
                    E.setState({
                      nodesDraggable: !x,
                      nodesConnectable: !x,
                      elementsSelectable: !x,
                    }),
                      null == w || w(!x);
                  },
                  title: "toggle interactivity",
                  "aria-label": "toggle interactivity",
                },
                x ? i.createElement(B, null) : i.createElement(v, null),
              ),
            z,
          );
        };
      z.displayName = "Controls";
      var E = r(37788),
        O = r(65683),
        F = r(7785),
        R = r(12466),
        j = r(70393);
      const x = (e) => () => e;
      function C(
        e,
        {
          sourceEvent: t,
          subject: r,
          target: n,
          identifier: i,
          active: a,
          x: o,
          y: s,
          dx: l,
          dy: c,
          dispatch: u,
        },
      ) {
        Object.defineProperties(this, {
          type: { value: e, enumerable: !0, configurable: !0 },
          sourceEvent: { value: t, enumerable: !0, configurable: !0 },
          subject: { value: r, enumerable: !0, configurable: !0 },
          target: { value: n, enumerable: !0, configurable: !0 },
          identifier: { value: i, enumerable: !0, configurable: !0 },
          active: { value: a, enumerable: !0, configurable: !0 },
          x: { value: o, enumerable: !0, configurable: !0 },
          y: { value: s, enumerable: !0, configurable: !0 },
          dx: { value: l, enumerable: !0, configurable: !0 },
          dy: { value: c, enumerable: !0, configurable: !0 },
          _: { value: u },
        });
      }
      function T(e) {
        return !e.ctrlKey && !e.button;
      }
      function W() {
        return this.parentNode;
      }
      function P(e, t) {
        return null == t ? { x: e.x, y: e.y } : t;
      }
      function I() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      C.prototype.on = function () {
        var e = this._.on.apply(this._, arguments);
        return e === this._ ? this : e;
      };
      var N = ["paid-pro", "paid-sponsor", "paid-enterprise", "paid-custom"];
      function A(e) {
        var t = e.proOptions,
          r = e.position,
          n = void 0 === r ? "bottom-right" : r;
        if (
          null != t &&
          t.account &&
          N.includes(null == t ? void 0 : t.account) &&
          null != t &&
          t.hideAttribution
        )
          return null;
        var o = "".concat(n).split("-");
        return i.createElement(
          "div",
          {
            className: a(["react-flow__attribution"].concat(l(o))),
            "data-message":
              "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev/pricing",
          },
          i.createElement(
            "a",
            {
              href: "https://reactflow.dev",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            "React Flow",
          ),
        );
      }
      var D = [
        "x",
        "y",
        "label",
        "labelStyle",
        "labelShowBg",
        "labelBgStyle",
        "labelBgPadding",
        "labelBgBorderRadius",
        "children",
        "className",
      ];
      function U(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var k = function (e) {
          var t = e.x,
            r = e.y,
            o = e.label,
            s = e.labelStyle,
            l = void 0 === s ? {} : s,
            c = e.labelShowBg,
            u = void 0 === c || c,
            d = e.labelBgStyle,
            f = void 0 === d ? {} : d,
            m = e.labelBgPadding,
            h = void 0 === m ? [2, 4] : m,
            y = e.labelBgBorderRadius,
            g = void 0 === y ? 2 : y,
            b = e.children,
            v = e.className,
            B = p(e, D),
            w = (0, i.useRef)(null),
            _ = (0, i.useState)({ x: 0, y: 0, width: 0, height: 0 }),
            M = (0, n._)(_, 2),
            S = M[0],
            z = M[1],
            E = a(["react-flow__edge-textwrapper", v]);
          return (
            (0, i.useEffect)(
              function () {
                if (w.current) {
                  var e = w.current.getBBox();
                  z({ x: e.x, y: e.y, width: e.width, height: e.height });
                }
              },
              [o],
            ),
            void 0 !== o && o
              ? i.createElement(
                  "g",
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? U(Object(r), !0).forEach(function (t) {
                            (0, n.a)(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(r),
                          )
                        : U(Object(r)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                            );
                          });
                    }
                    return e;
                  })(
                    {
                      transform: "translate("
                        .concat(t - S.width / 2, " ")
                        .concat(r - S.height / 2, ")"),
                      className: E,
                    },
                    B,
                  ),
                  u &&
                    i.createElement("rect", {
                      width: S.width + 2 * h[0],
                      x: -h[0],
                      y: -h[1],
                      height: S.height + 2 * h[1],
                      className: "react-flow__edge-textbg",
                      style: f,
                      rx: g,
                      ry: g,
                    }),
                  i.createElement(
                    "text",
                    {
                      className: "react-flow__edge-text",
                      y: S.height / 2,
                      dy: "0.3em",
                      ref: w,
                      style: l,
                    },
                    o,
                  ),
                  b,
                )
              : null
          );
        },
        X = (0, i.memo)(k),
        L = function (e) {
          var t = e.path,
            r = e.centerX,
            n = e.centerY,
            a = e.label,
            o = e.labelStyle,
            s = e.labelShowBg,
            l = e.labelBgStyle,
            c = e.labelBgPadding,
            u = e.labelBgBorderRadius,
            d = e.style,
            f = e.markerEnd,
            m = e.markerStart,
            h = a
              ? i.createElement(X, {
                  x: r,
                  y: n,
                  label: a,
                  labelStyle: o,
                  labelShowBg: s,
                  labelBgStyle: l,
                  labelBgPadding: c,
                  labelBgBorderRadius: u,
                })
              : null;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              style: d,
              d: t,
              className: "react-flow__edge-path",
              markerEnd: f,
              markerStart: m,
            }),
            h,
          );
        };
      function q(e) {
        var t,
          r,
          i = e.pos,
          a = e.x1,
          o = e.y1,
          s = e.x2,
          l = e.y2;
        switch (i) {
          case n.P.Left:
          case n.P.Right:
            (t = 0.5 * (a + s)), (r = o);
            break;
          case n.P.Top:
          case n.P.Bottom:
            (t = a), (r = 0.5 * (o + l));
        }
        return [t, r];
      }
      function Z(e) {
        var t = e.sourceX,
          r = e.sourceY,
          i = e.sourcePosition,
          a = void 0 === i ? n.P.Bottom : i,
          o = e.targetX,
          s = e.targetY,
          l = e.targetPosition,
          c = void 0 === l ? n.P.Top : l,
          u = q({ pos: a, x1: t, y1: r, x2: o, y2: s }),
          d = (0, n._)(u, 2),
          f = d[0],
          m = d[1],
          h = q({ pos: c, x1: o, y1: s, x2: t, y2: r }),
          p = (0, n._)(h, 2),
          y = p[0],
          g = p[1];
        return "M"
          .concat(t, ",")
          .concat(r, " C")
          .concat(f, ",")
          .concat(m, " ")
          .concat(y, ",")
          .concat(g, " ")
          .concat(o, ",")
          .concat(s);
      }
      var $ = (0, i.memo)(function (e) {
        var t = e.sourceX,
          r = e.sourceY,
          a = e.targetX,
          o = e.targetY,
          s = e.sourcePosition,
          l = void 0 === s ? n.P.Bottom : s,
          c = e.targetPosition,
          u = void 0 === c ? n.P.Top : c,
          d = e.label,
          f = e.labelStyle,
          m = e.labelShowBg,
          h = e.labelBgStyle,
          p = e.labelBgPadding,
          y = e.labelBgBorderRadius,
          g = e.style,
          b = e.markerEnd,
          v = e.markerStart,
          B = {
            sourceX: t,
            sourceY: r,
            sourcePosition: l,
            targetX: a,
            targetY: o,
            targetPosition: u,
          },
          w = Z(B),
          _ = (function (e) {
            var t = e.sourceX,
              r = e.sourceY,
              i = e.sourcePosition,
              a = void 0 === i ? n.P.Bottom : i,
              o = e.targetX,
              s = e.targetY,
              l = e.targetPosition,
              c = void 0 === l ? n.P.Top : l,
              u = q({ pos: a, x1: t, y1: r, x2: o, y2: s }),
              d = (0, n._)(u, 2),
              f = d[0],
              m = d[1],
              h = q({ pos: c, x1: o, y1: s, x2: t, y2: r }),
              p = (0, n._)(h, 2),
              y = 0.125 * t + 0.375 * f + 0.375 * p[0] + 0.125 * o,
              g = 0.125 * r + 0.375 * m + 0.375 * p[1] + 0.125 * s;
            return [y, g, Math.abs(y - t), Math.abs(g - r)];
          })(B),
          M = (0, n._)(_, 2),
          S = M[0],
          z = M[1];
        return i.createElement(L, {
          path: w,
          centerX: S,
          centerY: z,
          label: d,
          labelStyle: f,
          labelShowBg: m,
          labelBgStyle: h,
          labelBgPadding: p,
          labelBgBorderRadius: y,
          style: g,
          markerEnd: b,
          markerStart: v,
        });
      });
      function V(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var Y = [n.P.Left, n.P.Right],
        H = function (e) {
          var t = e.sourceX,
            r = e.sourceY,
            i = e.targetX,
            a = e.targetY,
            o = e.sourcePosition,
            s = void 0 === o ? n.P.Bottom : o,
            l = e.targetPosition,
            c = void 0 === l ? n.P.Top : l,
            u = Y.includes(s),
            d = Y.includes(c);
          if ((u && !d) || (d && !u)) {
            var f = u ? Math.abs(i - t) : 0,
              m = t > i ? t - f : t + f,
              h = u ? 0 : Math.abs(a - r);
            return [m, r < a ? r + h : r - h, f, h];
          }
          var p = Math.abs(i - t) / 2,
            y = i < t ? i + p : i - p,
            g = Math.abs(a - r) / 2;
          return [y, a < r ? a + g : a - g, p, g];
        };
      function G(e, t, r) {
        return void 0 === r
          ? r
          : function (i) {
              var a = t().edges.find(function (t) {
                return t.id === e;
              });
              r(
                i,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? V(Object(r), !0).forEach(function (t) {
                          (0, n.a)(e, t, r[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                        )
                      : V(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(r, t),
                          );
                        });
                  }
                  return e;
                })({}, a),
              );
            };
      }
      var K = function (e, t, r) {
          return "L "
            .concat(e, ",")
            .concat(t - r, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e + r, ",")
            .concat(t);
        },
        Q = function (e, t, r) {
          return "L "
            .concat(e + r, ",")
            .concat(t, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e, ",")
            .concat(t - r);
        },
        J = function (e, t, r) {
          return "L "
            .concat(e, ",")
            .concat(t - r, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e - r, ",")
            .concat(t);
        },
        ee = function (e, t, r) {
          return "L "
            .concat(e - r, ",")
            .concat(t, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e, ",")
            .concat(t - r);
        },
        te = function (e, t, r) {
          return "L "
            .concat(e + r, ",")
            .concat(t, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e, ",")
            .concat(t + r);
        },
        re = function (e, t, r) {
          return "L "
            .concat(e, ",")
            .concat(t + r, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e + r, ",")
            .concat(t);
        },
        ne = function (e, t, r) {
          return "L "
            .concat(e, ",")
            .concat(t + r, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e - r, ",")
            .concat(t);
        },
        ie = function (e, t, r) {
          return "L "
            .concat(e - r, ",")
            .concat(t, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e, ",")
            .concat(t + r);
        };
      function ae(e) {
        var t = e.sourceX,
          r = e.sourceY,
          i = e.sourcePosition,
          a = void 0 === i ? n.P.Bottom : i,
          o = e.targetX,
          s = e.targetY,
          l = e.targetPosition,
          c = void 0 === l ? n.P.Top : l,
          u = e.borderRadius,
          d = void 0 === u ? 5 : u,
          f = e.centerX,
          m = e.centerY,
          h = H({ sourceX: t, sourceY: r, targetX: o, targetY: s }),
          p = (0, n._)(h, 4),
          y = p[0],
          g = p[1],
          b = p[2],
          v = p[3],
          B = Math.min(d, Math.abs(o - t)),
          w = Math.min(d, Math.abs(s - r)),
          _ = Math.min(B, w, b, v),
          M = [n.P.Left, n.P.Right],
          S = void 0 !== f ? f : y,
          z = void 0 !== m ? m : g,
          E = null,
          O = null;
        return (
          t <= o
            ? ((E = r <= s ? K(t, z, _) : re(t, z, _)),
              (O = r <= s ? ie(o, z, _) : ee(o, z, _)))
            : ((E = r < s ? J(t, z, _) : ne(t, z, _)),
              (O = r < s ? te(o, z, _) : Q(o, z, _))),
          M.includes(a) && M.includes(c)
            ? t <= o
              ? ((E = r <= s ? ie(S, r, _) : ee(S, r, _)),
                (O = r <= s ? K(S, s, _) : re(S, s, _)))
              : ((a === n.P.Right && c === n.P.Left) ||
                  (a === n.P.Left && c === n.P.Right) ||
                  (a === n.P.Left && c === n.P.Left)) &&
                ((E = r <= s ? te(S, r, _) : Q(S, r, _)),
                (O = r <= s ? J(S, s, _) : ne(S, s, _)))
            : M.includes(a) && !M.includes(c)
            ? ((E =
                t <= o
                  ? r <= s
                    ? ie(o, r, _)
                    : ee(o, r, _)
                  : r <= s
                  ? te(o, r, _)
                  : Q(o, r, _)),
              (O = ""))
            : !M.includes(a) &&
              M.includes(c) &&
              ((E =
                t <= o
                  ? r <= s
                    ? K(t, s, _)
                    : re(t, s, _)
                  : r <= s
                  ? J(t, s, _)
                  : ne(t, s, _)),
              (O = "")),
          "M "
            .concat(t, ",")
            .concat(r)
            .concat(E)
            .concat(O, "L ")
            .concat(o, ",")
            .concat(s)
        );
      }
      var oe = (0, i.memo)(function (e) {
        var t = e.sourceX,
          r = e.sourceY,
          a = e.targetX,
          o = e.targetY,
          s = e.label,
          l = e.labelStyle,
          c = e.labelShowBg,
          u = e.labelBgStyle,
          d = e.labelBgPadding,
          f = e.labelBgBorderRadius,
          m = e.style,
          h = e.sourcePosition,
          p = void 0 === h ? n.P.Bottom : h,
          y = e.targetPosition,
          g = void 0 === y ? n.P.Top : y,
          b = e.markerEnd,
          v = e.markerStart,
          B = e.borderRadius,
          w = void 0 === B ? 5 : B,
          _ = H({
            sourceX: t,
            sourceY: r,
            targetX: a,
            targetY: o,
            sourcePosition: p,
            targetPosition: g,
          }),
          M = (0, n._)(_, 2),
          S = M[0],
          z = M[1],
          E = ae({
            sourceX: t,
            sourceY: r,
            sourcePosition: p,
            targetX: a,
            targetY: o,
            targetPosition: g,
            borderRadius: w,
          });
        return i.createElement(L, {
          path: E,
          centerX: S,
          centerY: z,
          label: s,
          labelStyle: l,
          labelShowBg: c,
          labelBgStyle: u,
          labelBgPadding: d,
          labelBgBorderRadius: f,
          style: m,
          markerEnd: b,
          markerStart: v,
        });
      });
      function se(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? se(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : se(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      var ce = (0, i.memo)(function (e) {
          return i.createElement(oe, le(le({}, e), {}, { borderRadius: 0 }));
        }),
        ue = (0, i.memo)(function (e) {
          var t = e.sourceX,
            r = e.sourceY,
            n = e.targetX,
            a = e.targetY,
            o = e.label,
            s = e.labelStyle,
            l = e.labelShowBg,
            c = e.labelBgStyle,
            u = e.labelBgPadding,
            d = e.labelBgBorderRadius,
            f = e.style,
            m = e.markerEnd,
            h = e.markerStart,
            p = Math.abs(a - r) / 2,
            y = a < r ? a + p : a - p,
            g = Math.abs(n - t) / 2,
            b = n < t ? n + g : n - g,
            v = "M ".concat(t, ",").concat(r, "L ").concat(n, ",").concat(a);
          return i.createElement(L, {
            path: v,
            centerX: b,
            centerY: y,
            label: o,
            labelStyle: s,
            labelShowBg: l,
            labelBgStyle: c,
            labelBgPadding: u,
            labelBgBorderRadius: d,
            style: f,
            markerEnd: m,
            markerStart: h,
          });
        });
      function de(e, t) {
        return e >= 0 ? 0.5 * e : 25 * t * Math.sqrt(-e);
      }
      function fe(e) {
        var t,
          r,
          i = e.pos,
          a = e.x1,
          o = e.y1,
          s = e.x2,
          l = e.y2,
          c = e.c;
        switch (i) {
          case n.P.Left:
            (t = a - de(a - s, c)), (r = o);
            break;
          case n.P.Right:
            (t = a + de(s - a, c)), (r = o);
            break;
          case n.P.Top:
            (t = a), (r = o - de(o - l, c));
            break;
          case n.P.Bottom:
            (t = a), (r = o + de(l - o, c));
        }
        return [t, r];
      }
      function me(e) {
        var t = e.sourceX,
          r = e.sourceY,
          i = e.sourcePosition,
          a = void 0 === i ? n.P.Bottom : i,
          o = e.targetX,
          s = e.targetY,
          l = e.targetPosition,
          c = void 0 === l ? n.P.Top : l,
          u = e.curvature,
          d = void 0 === u ? 0.25 : u,
          f = fe({ pos: a, x1: t, y1: r, x2: o, y2: s, c: d }),
          m = (0, n._)(f, 2),
          h = m[0],
          p = m[1],
          y = fe({ pos: c, x1: o, y1: s, x2: t, y2: r, c: d }),
          g = (0, n._)(y, 2),
          b = g[0],
          v = g[1];
        return "M"
          .concat(t, ",")
          .concat(r, " C")
          .concat(h, ",")
          .concat(p, " ")
          .concat(b, ",")
          .concat(v, " ")
          .concat(o, ",")
          .concat(s);
      }
      var he = (0, i.memo)(function (e) {
          var t = e.sourceX,
            r = e.sourceY,
            a = e.targetX,
            o = e.targetY,
            s = e.sourcePosition,
            l = void 0 === s ? n.P.Bottom : s,
            c = e.targetPosition,
            u = void 0 === c ? n.P.Top : c,
            d = e.label,
            f = e.labelStyle,
            m = e.labelShowBg,
            h = e.labelBgStyle,
            p = e.labelBgPadding,
            y = e.labelBgBorderRadius,
            g = e.style,
            b = e.markerEnd,
            v = e.markerStart,
            B = {
              sourceX: t,
              sourceY: r,
              sourcePosition: l,
              targetX: a,
              targetY: o,
              targetPosition: u,
              curvature: e.curvature,
            },
            w = me(B),
            _ = (function (e) {
              var t = e.sourceX,
                r = e.sourceY,
                i = e.sourcePosition,
                a = void 0 === i ? n.P.Bottom : i,
                o = e.targetX,
                s = e.targetY,
                l = e.targetPosition,
                c = void 0 === l ? n.P.Top : l,
                u = e.curvature,
                d = void 0 === u ? 0.25 : u,
                f = fe({ pos: a, x1: t, y1: r, x2: o, y2: s, c: d }),
                m = (0, n._)(f, 2),
                h = m[0],
                p = m[1],
                y = fe({ pos: c, x1: o, y1: s, x2: t, y2: r, c: d }),
                g = (0, n._)(y, 2),
                b = 0.125 * t + 0.375 * h + 0.375 * g[0] + 0.125 * o,
                v = 0.125 * r + 0.375 * p + 0.375 * g[1] + 0.125 * s;
              return [b, v, Math.abs(b - t), Math.abs(v - r)];
            })(B),
            M = (0, n._)(_, 2),
            S = M[0],
            z = M[1];
          return i.createElement(L, {
            path: w,
            centerX: S,
            centerY: z,
            label: d,
            labelStyle: f,
            labelShowBg: m,
            labelBgStyle: h,
            labelBgPadding: p,
            labelBgBorderRadius: y,
            style: g,
            markerEnd: b,
            markerStart: v,
          });
        }),
        pe = (0, i.createContext)(null),
        ye = pe.Provider;
      function ge(e, t, r, i, a, o, s) {
        var l = s.elementFromPoint(e.clientX, e.clientY),
          c = (null == l ? void 0 : l.classList.contains("target")) || !1,
          u = (null == l ? void 0 : l.classList.contains("source")) || !1,
          d = {
            elementBelow: l,
            isValid: !1,
            connection: {
              source: null,
              target: null,
              sourceHandle: null,
              targetHandle: null,
            },
            isHoveringHandle: !1,
          };
        if (l && (c || u)) {
          d.isHoveringHandle = !0;
          var f = l.getAttribute("data-nodeid"),
            m = l.getAttribute("data-handleid"),
            h = r
              ? { source: f, sourceHandle: m, target: i, targetHandle: a }
              : { source: i, sourceHandle: a, target: f, targetHandle: m };
          (d.connection = h),
            (t !== n.C.Strict || (r && u) || (!r && c)) && (d.isValid = o(h));
        }
        return d;
      }
      function be(e) {
        null == e || e.classList.remove("react-flow__handle-valid"),
          null == e || e.classList.remove("react-flow__handle-connecting");
      }
      function ve(e) {
        var t = e.event,
          r = e.handleId,
          i = e.nodeId,
          a = e.onConnect,
          o = e.isTarget,
          s = e.getState,
          l = e.setState,
          c = e.isValidConnection,
          u = e.elementEdgeUpdaterType,
          d = e.onEdgeUpdateEnd,
          f = t.target.closest(".react-flow"),
          m = (0, n.g)(t.target);
        if (m) {
          var h = m.elementFromPoint(t.clientX, t.clientY),
            p = null == h ? void 0 : h.classList.contains("target"),
            y = null == h ? void 0 : h.classList.contains("source");
          if (f && (p || y || u)) {
            var g,
              b = s(),
              v = b.onConnectStart,
              B = b.connectionMode,
              w = u || (p ? "target" : "source"),
              _ = f.getBoundingClientRect();
            l({
              connectionPosition: {
                x: t.clientX - _.left,
                y: t.clientY - _.top,
              },
              connectionNodeId: i,
              connectionHandleId: r,
              connectionHandleType: w,
            }),
              null == v || v(t, { nodeId: i, handleId: r, handleType: w }),
              m.addEventListener("mousemove", M),
              m.addEventListener("mouseup", function e(t) {
                var n = s(),
                  f = n.onConnectStop,
                  h = n.onConnectEnd,
                  p = ge(t, B, o, i, r, c, m),
                  y = p.connection,
                  b = p.isValid;
                null == f || f(t),
                  b && (null == a || a(y)),
                  null == h || h(t),
                  u && d && d(t),
                  be(g),
                  l({
                    connectionNodeId: null,
                    connectionHandleId: null,
                    connectionHandleType: null,
                  }),
                  m.removeEventListener("mousemove", M),
                  m.removeEventListener("mouseup", e);
              });
          }
        }
        function M(e) {
          l({
            connectionPosition: { x: e.clientX - _.left, y: e.clientY - _.top },
          });
          var t = ge(e, B, o, i, r, c, m),
            n = t.connection,
            a = t.elementBelow,
            s = t.isValid;
          if (!t.isHoveringHandle) return be(g);
          n.source !== n.target &&
            a &&
            (be(g),
            (g = a),
            a.classList.add("react-flow__handle-connecting"),
            a.classList.toggle("react-flow__handle-valid", s));
        }
      }
      pe.Consumer;
      var Be = [
        "type",
        "position",
        "isValidConnection",
        "isConnectable",
        "id",
        "onConnect",
        "children",
        "className",
        "onMouseDown",
      ];
      function we(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? we(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : we(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      var Me = function () {
          return !0;
        },
        Se = function (e) {
          return {
            connectionStartHandle: e.connectionStartHandle,
            connectOnClick: e.connectOnClick,
          };
        },
        ze = (0, i.forwardRef)(function (e, t) {
          var r = e.type,
            o = void 0 === r ? "source" : r,
            l = e.position,
            c = void 0 === l ? n.P.Top : l,
            u = e.isValidConnection,
            d = void 0 === u ? Me : u,
            f = e.isConnectable,
            m = void 0 === f || f,
            h = e.id,
            y = e.onConnect,
            g = e.children,
            b = e.className,
            v = e.onMouseDown,
            B = p(e, Be),
            w = (0, n.u)(),
            _ = (0, i.useContext)(pe),
            M = (0, n.b)(Se, s),
            S = M.connectionStartHandle,
            z = M.connectOnClick,
            E = h || null,
            O = "target" === o,
            F = function (e) {
              var t = w.getState(),
                r = t.defaultEdgeOptions,
                i = t.onConnect,
                a = t.hasDefaultEdges,
                o = _e(_e({}, r), e);
              if (a) {
                var s = w.getState().edges;
                w.setState({ edges: (0, n.c)(o, s) });
              }
              null == i || i(o), null == y || y(o);
            };
          return i.createElement(
            "div",
            _e(
              {
                "data-handleid": E,
                "data-nodeid": _,
                "data-handlepos": c,
                className: a([
                  "react-flow__handle",
                  "react-flow__handle-".concat(c),
                  "nodrag",
                  b,
                  {
                    source: !O,
                    target: O,
                    connectable: m,
                    connecting:
                      (null == S ? void 0 : S.nodeId) === _ &&
                      (null == S ? void 0 : S.handleId) === E &&
                      (null == S ? void 0 : S.type) === o,
                  },
                ]),
                onMouseDown: function (e) {
                  0 === e.button &&
                    ve({
                      event: e,
                      handleId: E,
                      nodeId: _,
                      onConnect: F,
                      isTarget: O,
                      getState: w.getState,
                      setState: w.setState,
                      isValidConnection: d,
                    }),
                    null == v || v(e);
                },
                onClick: z
                  ? function (e) {
                      var t = w.getState(),
                        r = t.onClickConnectStart,
                        i = t.onClickConnectStop,
                        a = t.onClickConnectEnd,
                        s = t.connectionMode;
                      if (!S)
                        return (
                          null == r ||
                            r(e, { nodeId: _, handleId: E, handleType: o }),
                          void w.setState({
                            connectionStartHandle: {
                              nodeId: _,
                              type: o,
                              handleId: E,
                            },
                          })
                        );
                      var l = (0, n.g)(e.target),
                        c = ge(
                          e,
                          s,
                          "target" === S.type,
                          S.nodeId,
                          S.handleId || null,
                          d,
                          l,
                        ),
                        u = c.connection,
                        f = c.isValid;
                      null == i || i(e),
                        f && F(u),
                        null == a || a(e),
                        w.setState({ connectionStartHandle: null });
                    }
                  : void 0,
                ref: t,
              },
              B,
            ),
            g,
          );
        });
      ze.displayName = "Handle";
      var Ee = (0, i.memo)(ze),
        Oe = function (e) {
          var t = e.data,
            r = e.isConnectable,
            a = e.targetPosition,
            o = void 0 === a ? n.P.Top : a,
            s = e.sourcePosition,
            l = void 0 === s ? n.P.Bottom : s;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(Ee, {
              type: "target",
              position: o,
              isConnectable: r,
            }),
            null == t ? void 0 : t.label,
            i.createElement(Ee, {
              type: "source",
              position: l,
              isConnectable: r,
            }),
          );
        };
      Oe.displayName = "DefaultNode";
      var Fe = (0, i.memo)(Oe),
        Re = function (e) {
          var t = e.data,
            r = e.isConnectable,
            a = e.sourcePosition,
            o = void 0 === a ? n.P.Bottom : a;
          return i.createElement(
            i.Fragment,
            null,
            null == t ? void 0 : t.label,
            i.createElement(Ee, {
              type: "source",
              position: o,
              isConnectable: r,
            }),
          );
        };
      Re.displayName = "InputNode";
      var je = (0, i.memo)(Re),
        xe = function (e) {
          var t = e.data,
            r = e.isConnectable,
            a = e.targetPosition,
            o = void 0 === a ? n.P.Top : a;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(Ee, {
              type: "target",
              position: o,
              isConnectable: r,
            }),
            null == t ? void 0 : t.label,
          );
        };
      xe.displayName = "OutputNode";
      var Ce = (0, i.memo)(xe),
        Te = function (e) {
          return {
            selectedNodes: Array.from(e.nodeInternals.values()).filter(
              function (e) {
                return e.selected;
              },
            ),
            selectedEdges: e.edges.filter(function (e) {
              return e.selected;
            }),
          };
        },
        We = function (e, t) {
          var r = e.selectedNodes.map(function (e) {
              return e.id;
            }),
            n = t.selectedNodes.map(function (e) {
              return e.id;
            }),
            i = e.selectedEdges.map(function (e) {
              return e.id;
            }),
            a = t.selectedEdges.map(function (e) {
              return e.id;
            });
          return s(r, n) && s(i, a);
        };
      function Pe(e) {
        var t = e.onSelectionChange,
          r = (0, n.b)(Te, We),
          a = r.selectedNodes,
          o = r.selectedEdges;
        return (
          (0, i.useEffect)(
            function () {
              t({ nodes: a, edges: o });
            },
            [a, o],
          ),
          null
        );
      }
      var Ie = (0, i.memo)(Pe),
        Ne = function (e) {
          return {
            setNodes: e.setNodes,
            setEdges: e.setEdges,
            setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
            setMinZoom: e.setMinZoom,
            setMaxZoom: e.setMaxZoom,
            setTranslateExtent: e.setTranslateExtent,
            setNodeExtent: e.setNodeExtent,
            reset: e.reset,
          };
        };
      function Ae(e, t) {
        (0, i.useEffect)(
          function () {
            void 0 !== e && t(e);
          },
          [e],
        );
      }
      function De(e, t, r) {
        (0, i.useEffect)(
          function () {
            void 0 !== t && r((0, n.a)({}, e, t));
          },
          [t],
        );
      }
      var Ue = function (e) {
          var t = e.nodes,
            r = e.edges,
            a = e.defaultNodes,
            o = e.defaultEdges,
            l = e.onConnect,
            c = e.onConnectStart,
            u = e.onConnectStop,
            d = e.onConnectEnd,
            f = e.onClickConnectStart,
            m = e.onClickConnectStop,
            h = e.onClickConnectEnd,
            p = e.nodesDraggable,
            y = e.nodesConnectable,
            g = e.minZoom,
            b = e.maxZoom,
            v = e.nodeExtent,
            B = e.onNodesChange,
            w = e.onEdgesChange,
            _ = e.elementsSelectable,
            M = e.connectionMode,
            S = e.snapGrid,
            z = e.snapToGrid,
            E = e.translateExtent,
            O = e.connectOnClick,
            F = e.defaultEdgeOptions,
            R = e.fitView,
            j = e.fitViewOptions,
            x = e.onNodesDelete,
            C = e.onEdgesDelete,
            T = e.onNodeDrag,
            W = e.onNodeDragStart,
            P = e.onNodeDragStop,
            I = e.onSelectionDrag,
            N = e.onSelectionDragStart,
            A = e.onSelectionDragStop,
            D = (0, n.b)(Ne, s),
            U = D.setNodes,
            k = D.setEdges,
            X = D.setDefaultNodesAndEdges,
            L = D.setMinZoom,
            q = D.setMaxZoom,
            Z = D.setTranslateExtent,
            $ = D.setNodeExtent,
            V = D.reset,
            Y = (0, n.u)();
          return (
            (0, i.useEffect)(function () {
              return (
                X(a, o),
                function () {
                  V();
                }
              );
            }, []),
            De("defaultEdgeOptions", F, Y.setState),
            De("connectionMode", M, Y.setState),
            De("onConnect", l, Y.setState),
            De("onConnectStart", c, Y.setState),
            De("onConnectStop", u, Y.setState),
            De("onConnectEnd", d, Y.setState),
            De("onClickConnectStart", f, Y.setState),
            De("onClickConnectStop", m, Y.setState),
            De("onClickConnectEnd", h, Y.setState),
            De("nodesDraggable", p, Y.setState),
            De("nodesConnectable", y, Y.setState),
            De("elementsSelectable", _, Y.setState),
            De("snapToGrid", z, Y.setState),
            De("snapGrid", S, Y.setState),
            De("onNodesChange", B, Y.setState),
            De("onEdgesChange", w, Y.setState),
            De("connectOnClick", O, Y.setState),
            De("fitViewOnInit", R, Y.setState),
            De("fitViewOnInitOptions", j, Y.setState),
            De("onNodesDelete", x, Y.setState),
            De("onEdgesDelete", C, Y.setState),
            De("onNodeDrag", T, Y.setState),
            De("onNodeDragStart", W, Y.setState),
            De("onNodeDragStop", P, Y.setState),
            De("onSelectionDrag", I, Y.setState),
            De("onSelectionDragStart", N, Y.setState),
            De("onSelectionDragStop", A, Y.setState),
            Ae(t, U),
            Ae(r, k),
            Ae(a, U),
            Ae(o, k),
            Ae(g, L),
            Ae(b, q),
            Ae(E, Z),
            Ae(v, $),
            null
          );
        },
        ke = function (e, t, r) {
          return r === n.P.Left ? e - t : r === n.P.Right ? e + t : e;
        },
        Xe = function (e, t, r) {
          return r === n.P.Top ? e - t : r === n.P.Bottom ? e + t : e;
        },
        Le = function (e) {
          var t = e.className,
            r = e.position,
            n = e.centerX,
            o = e.centerY,
            s = e.radius,
            l = void 0 === s ? 10 : s;
          return i.createElement("circle", {
            className: a(["react-flow__edgeupdater", t]),
            cx: ke(n, l, r),
            cy: Xe(o, l, r),
            r: l,
            stroke: "transparent",
            fill: "transparent",
          });
        },
        qe = function (e) {
          var t = function (t) {
            var r = t.id,
              o = t.className,
              s = t.type,
              l = t.data,
              c = t.onClick,
              u = t.onEdgeDoubleClick,
              d = t.selected,
              f = t.animated,
              m = t.label,
              h = t.labelStyle,
              p = t.labelShowBg,
              y = t.labelBgStyle,
              g = t.labelBgPadding,
              b = t.labelBgBorderRadius,
              v = t.style,
              B = t.source,
              w = t.target,
              _ = t.sourceX,
              M = t.sourceY,
              S = t.targetX,
              z = t.targetY,
              E = t.sourcePosition,
              O = t.targetPosition,
              F = t.elementsSelectable,
              R = t.hidden,
              j = t.sourceHandleId,
              x = t.targetHandleId,
              C = t.onContextMenu,
              T = t.onMouseEnter,
              W = t.onMouseMove,
              P = t.onMouseLeave,
              I = t.edgeUpdaterRadius,
              N = t.onEdgeUpdate,
              A = t.onEdgeUpdateStart,
              D = t.onEdgeUpdateEnd,
              U = t.markerEnd,
              k = t.markerStart,
              X = t.rfId,
              L = (0, i.useState)(!1),
              q = (0, n._)(L, 2),
              Z = q[0],
              $ = q[1],
              V = (0, n.u)(),
              Y = G(r, V.getState, u),
              H = G(r, V.getState, C),
              K = G(r, V.getState, T),
              Q = G(r, V.getState, W),
              J = G(r, V.getState, P),
              ee = function (e, t) {
                var n = t ? w : B,
                  i = (t ? x : j) || null,
                  a = t ? "target" : "source",
                  o = t,
                  s = V.getState().edges.find(function (e) {
                    return e.id === r;
                  });
                null == A || A(e, s, a);
                var l = D
                  ? function (e) {
                      return D(e, s, a);
                    }
                  : void 0;
                ve({
                  event: e,
                  handleId: i,
                  nodeId: n,
                  onConnect: function (e) {
                    return null == N ? void 0 : N(s, e);
                  },
                  isTarget: o,
                  getState: V.getState,
                  setState: V.setState,
                  isValidConnection: function () {
                    return !0;
                  },
                  elementEdgeUpdaterType: a,
                  onEdgeUpdateEnd: l,
                });
              },
              te = function () {
                return $(!0);
              },
              re = function () {
                return $(!1);
              },
              ne = (0, i.useMemo)(
                function () {
                  return "url(#".concat((0, n.d)(k, X), ")");
                },
                [k, X],
              ),
              ie = (0, i.useMemo)(
                function () {
                  return "url(#".concat((0, n.d)(U, X), ")");
                },
                [U, X],
              );
            if (R) return null;
            var ae = !F && !c,
              oe = void 0 !== N,
              se = a([
                "react-flow__edge",
                "react-flow__edge-".concat(s),
                o,
                { selected: d, animated: f, inactive: ae, updating: Z },
              ]);
            return i.createElement(
              "g",
              {
                className: se,
                onClick: function (e) {
                  var t = V.getState(),
                    n = t.edges,
                    i = t.addSelectedEdges,
                    a = n.find(function (e) {
                      return e.id === r;
                    });
                  F && (V.setState({ nodesSelectionActive: !1 }), i([r])),
                    null == c || c(e, a);
                },
                onDoubleClick: Y,
                onContextMenu: H,
                onMouseEnter: K,
                onMouseMove: Q,
                onMouseLeave: J,
              },
              i.createElement(e, {
                id: r,
                source: B,
                target: w,
                selected: d,
                animated: f,
                label: m,
                labelStyle: h,
                labelShowBg: p,
                labelBgStyle: y,
                labelBgPadding: g,
                labelBgBorderRadius: b,
                data: l,
                style: v,
                sourceX: _,
                sourceY: M,
                targetX: S,
                targetY: z,
                sourcePosition: E,
                targetPosition: O,
                sourceHandleId: j,
                targetHandleId: x,
                markerStart: ne,
                markerEnd: ie,
                "data-testid": "rf__edge-".concat(r),
              }),
              oe &&
                i.createElement(
                  "g",
                  {
                    onMouseDown: function (e) {
                      return ee(e, !0);
                    },
                    onMouseEnter: te,
                    onMouseOut: re,
                  },
                  i.createElement(Le, {
                    position: E,
                    centerX: _,
                    centerY: M,
                    radius: I,
                  }),
                ),
              oe &&
                i.createElement(
                  "g",
                  {
                    onMouseDown: function (e) {
                      return ee(e, !1);
                    },
                    onMouseEnter: te,
                    onMouseOut: re,
                  },
                  i.createElement(Le, {
                    position: O,
                    centerX: S,
                    centerY: z,
                    radius: I,
                  }),
                ),
            );
          };
          return (t.displayName = "EdgeWrapper"), (0, i.memo)(t);
        };
      function Ze(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function $e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ze(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ze(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function Ve(e) {
        var t = {
            default: qe(e.default || he),
            straight: qe(e.bezier || ue),
            step: qe(e.step || ce),
            smoothstep: qe(e.step || oe),
            simplebezier: qe(e.simplebezier || $),
          },
          r = Object.keys(e)
            .filter(function (e) {
              return !["default", "bezier"].includes(e);
            })
            .reduce(function (t, r) {
              return (t[r] = qe(e[r] || he)), t;
            }, {});
        return $e($e({}, t), r);
      }
      function Ye(e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          i = ((null == r ? void 0 : r.x) || 0) + t.x,
          a = ((null == r ? void 0 : r.y) || 0) + t.y,
          o = (null == r ? void 0 : r.width) || t.width,
          s = (null == r ? void 0 : r.height) || t.height;
        switch (e) {
          case n.P.Top:
            return { x: i + o / 2, y: a };
          case n.P.Right:
            return { x: i + o, y: a + s / 2 };
          case n.P.Bottom:
            return { x: i + o / 2, y: a + s };
          case n.P.Left:
            return { x: i, y: a + s / 2 };
        }
      }
      function He(e, t) {
        if (!e) return null;
        var r = null;
        return (
          1 !== e.length && t
            ? t &&
              (r = e.find(function (e) {
                return e.id === t;
              }))
            : (r = e[0]),
          void 0 === r ? null : r
        );
      }
      function Ge(e, t) {
        var r,
          i,
          a,
          o,
          s,
          l = e.get(t),
          c =
            (null == l || null === (r = l[n.i]) || void 0 === r
              ? void 0
              : r.handleBounds) || null,
          u = !(
            l &&
            c &&
            l.width &&
            l.height &&
            void 0 !==
              (null === (i = l.positionAbsolute) || void 0 === i
                ? void 0
                : i.x) &&
            void 0 !==
              (null === (a = l.positionAbsolute) || void 0 === a ? void 0 : a.y)
          );
        return [
          {
            x:
              (null == l || null === (o = l.positionAbsolute) || void 0 === o
                ? void 0
                : o.x) || 0,
            y:
              (null == l || null === (s = l.positionAbsolute) || void 0 === s
                ? void 0
                : s.y) || 0,
            width: (null == l ? void 0 : l.width) || 0,
            height: (null == l ? void 0 : l.height) || 0,
          },
          c,
          !u,
        ];
      }
      var Ke = "undefined" != typeof document ? document : null,
        Qe = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { target: Ke },
            r = (0, i.useState)(!1),
            a = (0, n._)(r, 2),
            o = a[0],
            s = a[1],
            c = (0, i.useRef)(new Set([])),
            u = (0, i.useMemo)(
              function () {
                if (null !== e) {
                  var t = (Array.isArray(e) ? e : [e])
                      .filter(function (e) {
                        return "string" == typeof e;
                      })
                      .map(function (e) {
                        return e.split("+");
                      }),
                    r = t.reduce(function (e, t) {
                      return e.concat.apply(e, l(t));
                    }, []);
                  return [t, r];
                }
                return [[], []];
              },
              [e],
            ),
            d = (0, n._)(u, 2),
            f = d[0],
            m = d[1];
          return (
            (0, i.useEffect)(
              function () {
                if (null !== e) {
                  var r,
                    n,
                    i = function (e) {
                      if (tt(e)) return !1;
                      var t = et(e.code, m);
                      c.current.add(e[t]),
                        Je(f, c.current, !1) && (e.preventDefault(), s(!0));
                    },
                    a = function (e) {
                      if (tt(e)) return !1;
                      var t = et(e.code, m);
                      Je(f, c.current, !0)
                        ? (s(!1), c.current.clear())
                        : c.current.delete(e[t]);
                    },
                    o = function () {
                      c.current.clear(), s(!1);
                    };
                  return (
                    null == t ||
                      null === (r = t.target) ||
                      void 0 === r ||
                      r.addEventListener("keydown", i),
                    null == t ||
                      null === (n = t.target) ||
                      void 0 === n ||
                      n.addEventListener("keyup", a),
                    window.addEventListener("blur", o),
                    function () {
                      var e, r;
                      null == t ||
                        null === (e = t.target) ||
                        void 0 === e ||
                        e.removeEventListener("keydown", i),
                        null == t ||
                          null === (r = t.target) ||
                          void 0 === r ||
                          r.removeEventListener("keyup", a),
                        window.removeEventListener("blur", o);
                    }
                  );
                }
              },
              [e, s],
            ),
            o
          );
        };
      function Je(e, t, r) {
        return e
          .filter(function (e) {
            return r || e.length === t.size;
          })
          .some(function (e) {
            return e.every(function (e) {
              return t.has(e);
            });
          });
      }
      function et(e, t) {
        return t.includes(e) ? "code" : "key";
      }
      function tt(e) {
        var t,
          r =
            (null === (t = e.composedPath) || void 0 === t
              ? void 0
              : t.call(e)[0]) || e.target;
        return (
          ["INPUT", "SELECT", "TEXTAREA"].includes(
            null == r ? void 0 : r.nodeName,
          ) || (null == r ? void 0 : r.hasAttribute("contenteditable"))
        );
      }
      var rt = function (e) {
        return {
          onNodesChange: e.onNodesChange,
          onEdgesChange: e.onEdgesChange,
        };
      };
      var nt = function (e) {
          return { x: e.x, y: e.y, zoom: e.k };
        },
        it = function (e, t) {
          return e.target.closest(".".concat(t));
        },
        at = function (e) {
          return {
            d3Zoom: e.d3Zoom,
            d3Selection: e.d3Selection,
            d3ZoomHandler: e.d3ZoomHandler,
          };
        },
        ot = function (e) {
          var t = e.onMove,
            r = e.onMoveStart,
            a = e.onMoveEnd,
            l = e.zoomOnScroll,
            c = void 0 === l || l,
            u = e.zoomOnPinch,
            d = void 0 === u || u,
            f = e.panOnScroll,
            m = void 0 !== f && f,
            h = e.panOnScrollSpeed,
            p = void 0 === h ? 0.5 : h,
            y = e.panOnScrollMode,
            g = void 0 === y ? n.h.Free : y,
            b = e.zoomOnDoubleClick,
            v = void 0 === b || b,
            B = e.selectionKeyPressed,
            w = e.elementsSelectable,
            _ = e.panOnDrag,
            M = void 0 === _ || _,
            S = e.translateExtent,
            z = e.minZoom,
            F = e.maxZoom,
            R = e.defaultZoom,
            j = void 0 === R ? 1 : R,
            x = e.defaultPosition,
            C = void 0 === x ? [0, 0] : x,
            T = e.zoomActivationKeyCode,
            W = e.preventScrolling,
            P = void 0 === W || W,
            I = e.children,
            N = e.noWheelClassName,
            A = e.noPanClassName,
            D = (0, n.u)(),
            U = (0, i.useRef)(!1),
            k = (0, i.useRef)(null),
            X = (0, i.useRef)({ x: 0, y: 0, zoom: 0 }),
            L = (0, n.b)(at, s),
            q = L.d3Zoom,
            Z = L.d3Selection,
            $ = L.d3ZoomHandler,
            V = Qe(T);
          return (
            (function (e) {
              var t = (0, n.u)();
              (0, i.useEffect)(function () {
                var r,
                  i = function () {
                    if (e.current) {
                      var r = (0, n.f)(e.current);
                      t.setState({
                        width: r.width || 500,
                        height: r.height || 500,
                      });
                    }
                  };
                return (
                  i(),
                  (window.onresize = i),
                  e.current &&
                    (r = new ResizeObserver(function () {
                      return i();
                    })).observe(e.current),
                  function () {
                    (window.onresize = null),
                      r && e.current && r.unobserve(e.current);
                  }
                );
              }, []);
            })(k),
            (0, i.useEffect)(function () {
              if (k.current) {
                var e,
                  t = (0, o.sP)().scaleExtent([z, F]).translateExtent(S),
                  r = (0, E.Z)(k.current).call(t),
                  i = (0, n.j)(C[0], S[0][0], S[1][0]),
                  a = (0, n.j)(C[1], S[0][1], S[1][1]),
                  s = (0, n.j)(j, z, F),
                  l = o.CR.translate(i, a).scale(s);
                t.transform(r, l),
                  D.setState({
                    d3Zoom: t,
                    d3Selection: r,
                    d3ZoomHandler: r.on("wheel.zoom"),
                    transform: [i, a, s],
                    domNode:
                      null === (e = r.node()) || void 0 === e
                        ? void 0
                        : e.closest(".react-flow"),
                  });
              }
            }, []),
            (0, i.useEffect)(
              function () {
                Z &&
                  q &&
                  (m && !V
                    ? Z.on("wheel", function (e) {
                        if (it(e, N)) return !1;
                        e.preventDefault(), e.stopImmediatePropagation();
                        var t = Z.property("__zoom").k || 1;
                        if (e.ctrlKey && d) {
                          var r = (0, O.Z)(e),
                            i =
                              -e.deltaY *
                              (1 === e.deltaMode
                                ? 0.05
                                : e.deltaMode
                                ? 1
                                : 0.002) *
                              10,
                            a = t * Math.pow(2, i);
                          q.scaleTo(Z, a, r);
                        } else {
                          var o = 1 === e.deltaMode ? 20 : 1,
                            s = g === n.h.Vertical ? 0 : e.deltaX * o,
                            l = g === n.h.Horizontal ? 0 : e.deltaY * o;
                          q.translateBy(Z, (-s / t) * p, (-l / t) * p);
                        }
                      }).on("wheel.zoom", null)
                    : void 0 !== $ &&
                      Z.on("wheel", function (e) {
                        if (!P || it(e, N)) return null;
                        e.preventDefault();
                      }).on("wheel.zoom", $));
              },
              [m, g, Z, q, $, V, d, P, N],
            ),
            (0, i.useEffect)(
              function () {
                q &&
                  (B && !U.current
                    ? q.on("zoom", null)
                    : B ||
                      q.on("zoom", function (e) {
                        if (
                          (D.setState({
                            transform: [
                              e.transform.x,
                              e.transform.y,
                              e.transform.k,
                            ],
                          }),
                          t)
                        ) {
                          var r = nt(e.transform);
                          t(e.sourceEvent, r);
                        }
                      }));
              },
              [B, q, t],
            ),
            (0, i.useEffect)(
              function () {
                q &&
                  q.on("start", function (e) {
                    if (((U.current = !0), r)) {
                      var t = nt(e.transform);
                      (X.current = t), r(e.sourceEvent, t);
                    }
                  });
              },
              [q, r],
            ),
            (0, i.useEffect)(
              function () {
                q &&
                  q.on("end", function (e) {
                    if (
                      ((U.current = !1),
                      a &&
                        ((r = X.current),
                        (n = e.transform),
                        r.x !== n.x || r.y !== n.y || r.zoom !== n.k))
                    ) {
                      var t = nt(e.transform);
                      (X.current = t), a(e.sourceEvent, t);
                    }
                    var r, n;
                  });
              },
              [q, a],
            ),
            (0, i.useEffect)(
              function () {
                q &&
                  q.filter(function (e) {
                    var t = V || c,
                      r = d && e.ctrlKey;
                    return (
                      !!(M || t || m || v || d) &&
                      !B &&
                      !(!v && "dblclick" === e.type) &&
                      (!it(e, N) || "wheel" !== e.type) &&
                      (!it(e, A) || "wheel" === e.type) &&
                      !(!d && e.ctrlKey && "wheel" === e.type) &&
                      !!(t || m || r || "wheel" !== e.type) &&
                      !!(
                        M ||
                        ("mousedown" !== e.type && "touchstart" !== e.type)
                      ) &&
                      !((e.ctrlKey && "wheel" !== e.type) || e.button)
                    );
                  });
              },
              [q, c, d, m, v, M, B, w, V],
            ),
            i.createElement(
              "div",
              {
                className: "react-flow__renderer react-flow__container",
                ref: k,
              },
              I,
            )
          );
        };
      function st(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function lt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? st(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : st(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function ct(e, t) {
        return { x: e.clientX - t.left, y: e.clientY - t.top };
      }
      var ut = function (e) {
          return {
            userSelectionActive: e.userSelectionActive,
            elementsSelectable: e.elementsSelectable,
          };
        },
        dt = {
          startX: 0,
          startY: 0,
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          draw: !1,
        },
        ft = (0, i.memo)(function (e) {
          var t = e.selectionKeyPressed,
            r = (0, n.u)(),
            a = (0, i.useRef)(0),
            o = (0, i.useRef)(0),
            l = (0, i.useRef)(),
            c = (0, i.useState)(dt),
            u = (0, n._)(c, 2),
            d = u[0],
            f = u[1],
            m = (0, n.b)(ut, s),
            h = m.userSelectionActive;
          if (!m.elementsSelectable || !(h || t)) return null;
          var p = function () {
            f(dt),
              r.setState({ userSelectionActive: !1 }),
              (a.current = 0),
              (o.current = 0);
          };
          return i.createElement(
            "div",
            {
              className: "react-flow__selectionpane react-flow__container",
              onMouseDown: function (e) {
                var t = e.target.closest(".react-flow");
                l.current = t.getBoundingClientRect();
                var n = ct(e, l.current);
                f({
                  width: 0,
                  height: 0,
                  startX: n.x,
                  startY: n.y,
                  x: n.x,
                  y: n.y,
                  draw: !0,
                }),
                  r.setState({
                    userSelectionActive: !0,
                    nodesSelectionActive: !1,
                  });
              },
              onMouseMove: function (e) {
                var i, s;
                if (t && d.draw && l.current) {
                  var c = ct(e, l.current),
                    u = null !== (i = d.startX) && void 0 !== i ? i : 0,
                    m = null !== (s = d.startY) && void 0 !== s ? s : 0,
                    h = lt(
                      lt({}, d),
                      {},
                      {
                        x: c.x < u ? c.x : u,
                        y: c.y < m ? c.y : m,
                        width: Math.abs(c.x - u),
                        height: Math.abs(c.y - m),
                      },
                    ),
                    p = r.getState(),
                    y = p.nodeInternals,
                    g = p.edges,
                    b = p.transform,
                    v = p.onNodesChange,
                    B = p.onEdgesChange,
                    w = Array.from(y.values()),
                    _ = (0, n.k)(y, h, b, !1, !0),
                    M = (0, n.e)(_, g).map(function (e) {
                      return e.id;
                    }),
                    S = _.map(function (e) {
                      return e.id;
                    });
                  if (a.current !== S.length) {
                    a.current = S.length;
                    var z = (0, n.l)(w, S);
                    z.length && (null == v || v(z));
                  }
                  if (o.current !== M.length) {
                    o.current = M.length;
                    var E = (0, n.l)(g, M);
                    E.length && (null == B || B(E));
                  }
                  f(h);
                }
              },
              onMouseUp: function () {
                r.setState({ nodesSelectionActive: a.current > 0 }), p();
              },
              onMouseLeave: function () {
                r.setState({ nodesSelectionActive: !1 }), p();
              },
            },
            d.draw &&
              i.createElement("div", {
                className: "react-flow__selection react-flow__container",
                style: {
                  width: d.width,
                  height: d.height,
                  transform: "translate("
                    .concat(d.x, "px, ")
                    .concat(d.y, "px)"),
                },
              }),
          );
        });
      function mt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ht(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? mt(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : mt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function pt(e, t) {
        if (!e.parentNode) return !1;
        var r = t.get(e.parentNode);
        return !!r && (!!r.selected || pt(r, t));
      }
      function yt(e, t, r) {
        var n = e;
        do {
          var i;
          if (null !== (i = n) && void 0 !== i && i.matches(t)) return !0;
          if (n === r.current) return !1;
          n = n.parentElement;
        } while (n);
        return !1;
      }
      function gt(e, t, r) {
        return Array.from(e.values())
          .filter(function (t) {
            return (t.selected || t.id === r) && (!t.parentNode || !pt(t, e));
          })
          .map(function (e) {
            var r, n, i, a;
            return {
              id: e.id,
              position: e.position || { x: 0, y: 0 },
              positionAbsolute: e.positionAbsolute || { x: 0, y: 0 },
              distance: {
                x:
                  t.x -
                  (null !==
                    (r =
                      null === (n = e.positionAbsolute) || void 0 === n
                        ? void 0
                        : n.x) && void 0 !== r
                    ? r
                    : 0),
                y:
                  t.y -
                  (null !==
                    (i =
                      null === (a = e.positionAbsolute) || void 0 === a
                        ? void 0
                        : a.y) && void 0 !== i
                    ? i
                    : 0),
              },
              delta: { x: 0, y: 0 },
              extent: e.extent,
              parentNode: e.parentNode,
              width: e.width,
              height: e.height,
            };
          });
      }
      function bt(e) {
        var t = e.nodeId,
          r = e.dragItems,
          n = e.nodeInternals,
          i = r.map(function (e) {
            return ht(
              ht({}, n.get(e.id)),
              {},
              { position: e.position, positionAbsolute: e.positionAbsolute },
            );
          });
        return [
          t
            ? i.find(function (e) {
                return e.id === t;
              })
            : i[0],
          i,
        ];
      }
      function vt(e) {
        return function (t, r, n) {
          return null == e ? void 0 : e(t, n);
        };
      }
      function Bt(e) {
        var t = e.nodeRef,
          r = e.disabled,
          a = void 0 !== r && r,
          o = e.noDragClassName,
          s = e.handleSelector,
          l = e.nodeId,
          c = e.isSelectable,
          u = e.selectNodesOnDrag,
          d = (0, i.useState)(!1),
          f = (0, n._)(d, 2),
          m = f[0],
          h = f[1],
          p = (0, n.u)(),
          y = (0, i.useRef)(),
          g = (0, i.useRef)({ x: null, y: null }),
          b = (0, i.useCallback)(function (e) {
            var t = e.sourceEvent,
              r = p.getState(),
              i = r.transform,
              a = r.snapGrid,
              o = r.snapToGrid,
              s = t.touches ? t.touches[0].clientX : t.clientX,
              l = t.touches ? t.touches[0].clientY : t.clientY;
            return (0, n.p)({ x: s, y: l }, i, o, a);
          }, []);
        return (
          (0, i.useEffect)(
            function () {
              if (null != t && t.current) {
                var e = (0, E.Z)(t.current);
                if (!a) {
                  var r = (function () {
                    var e,
                      t,
                      r,
                      n,
                      i = T,
                      a = W,
                      o = P,
                      s = I,
                      l = {},
                      c = (0, F.Z)("start", "drag", "end"),
                      u = 0,
                      d = 0;
                    function f(e) {
                      e.on("mousedown.drag", m)
                        .filter(s)
                        .on("touchstart.drag", y)
                        .on("touchmove.drag", g, j.Q7)
                        .on("touchend.drag touchcancel.drag", b)
                        .style("touch-action", "none")
                        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
                    }
                    function m(o, s) {
                      if (!n && i.call(this, o, s)) {
                        var l = v(this, a.call(this, o, s), o, s, "mouse");
                        l &&
                          ((0, E.Z)(o.view)
                            .on("mousemove.drag", h, j.Dd)
                            .on("mouseup.drag", p, j.Dd),
                          (0, R.Z)(o.view),
                          (0, j.rG)(o),
                          (r = !1),
                          (e = o.clientX),
                          (t = o.clientY),
                          l("start", o));
                      }
                    }
                    function h(n) {
                      if (((0, j.ZP)(n), !r)) {
                        var i = n.clientX - e,
                          a = n.clientY - t;
                        r = i * i + a * a > d;
                      }
                      l.mouse("drag", n);
                    }
                    function p(e) {
                      (0, E.Z)(e.view).on("mousemove.drag mouseup.drag", null),
                        (0, R.D)(e.view, r),
                        (0, j.ZP)(e),
                        l.mouse("end", e);
                    }
                    function y(e, t) {
                      if (i.call(this, e, t)) {
                        var r,
                          n,
                          o = e.changedTouches,
                          s = a.call(this, e, t),
                          l = o.length;
                        for (r = 0; r < l; ++r)
                          (n = v(this, s, e, t, o[r].identifier, o[r])) &&
                            ((0, j.rG)(e), n("start", e, o[r]));
                      }
                    }
                    function g(e) {
                      var t,
                        r,
                        n = e.changedTouches,
                        i = n.length;
                      for (t = 0; t < i; ++t)
                        (r = l[n[t].identifier]) &&
                          ((0, j.ZP)(e), r("drag", e, n[t]));
                    }
                    function b(e) {
                      var t,
                        r,
                        i = e.changedTouches,
                        a = i.length;
                      for (
                        n && clearTimeout(n),
                          n = setTimeout(function () {
                            n = null;
                          }, 500),
                          t = 0;
                        t < a;
                        ++t
                      )
                        (r = l[i[t].identifier]) &&
                          ((0, j.rG)(e), r("end", e, i[t]));
                    }
                    function v(e, t, r, n, i, a) {
                      var s,
                        d,
                        m,
                        h = c.copy(),
                        p = (0, O.Z)(a || r, t);
                      if (
                        null !=
                        (m = o.call(
                          e,
                          new C("beforestart", {
                            sourceEvent: r,
                            target: f,
                            identifier: i,
                            active: u,
                            x: p[0],
                            y: p[1],
                            dx: 0,
                            dy: 0,
                            dispatch: h,
                          }),
                          n,
                        ))
                      )
                        return (
                          (s = m.x - p[0] || 0),
                          (d = m.y - p[1] || 0),
                          function r(a, o, c) {
                            var y,
                              g = p;
                            switch (a) {
                              case "start":
                                (l[i] = r), (y = u++);
                                break;
                              case "end":
                                delete l[i], --u;
                              case "drag":
                                (p = (0, O.Z)(c || o, t)), (y = u);
                            }
                            h.call(
                              a,
                              e,
                              new C(a, {
                                sourceEvent: o,
                                subject: m,
                                target: f,
                                identifier: i,
                                active: y,
                                x: p[0] + s,
                                y: p[1] + d,
                                dx: p[0] - g[0],
                                dy: p[1] - g[1],
                                dispatch: h,
                              }),
                              n,
                            );
                          }
                        );
                    }
                    return (
                      (f.filter = function (e) {
                        return arguments.length
                          ? ((i = "function" == typeof e ? e : x(!!e)), f)
                          : i;
                      }),
                      (f.container = function (e) {
                        return arguments.length
                          ? ((a = "function" == typeof e ? e : x(e)), f)
                          : a;
                      }),
                      (f.subject = function (e) {
                        return arguments.length
                          ? ((o = "function" == typeof e ? e : x(e)), f)
                          : o;
                      }),
                      (f.touchable = function (e) {
                        return arguments.length
                          ? ((s = "function" == typeof e ? e : x(!!e)), f)
                          : s;
                      }),
                      (f.on = function () {
                        var e = c.on.apply(c, arguments);
                        return e === c ? f : e;
                      }),
                      (f.clickDistance = function (e) {
                        return arguments.length
                          ? ((d = (e = +e) * e), f)
                          : Math.sqrt(d);
                      }),
                      f
                    );
                  })()
                    .on("start", function (e) {
                      var t,
                        r = p.getState(),
                        i = r.nodeInternals,
                        a = r.multiSelectionActive,
                        o = r.unselectNodesAndEdges,
                        s = r.onNodeDragStart,
                        d = r.onSelectionDragStart,
                        f = l ? s : vt(d);
                      u ||
                        a ||
                        !l ||
                        (null !== (t = i.get(l)) &&
                          void 0 !== t &&
                          t.selected) ||
                        o();
                      l && c && u && (0, n.n)({ id: l, store: p });
                      var m = b(e);
                      if (
                        ((g.current = m),
                        (y.current = gt(i, m, l)),
                        f && y.current)
                      ) {
                        var h = bt({
                            nodeId: l,
                            dragItems: y.current,
                            nodeInternals: i,
                          }),
                          v = (0, n._)(h, 2),
                          B = v[0],
                          w = v[1];
                        f(e.sourceEvent, B, w);
                      }
                    })
                    .on("drag", function (e) {
                      var t = p.getState(),
                        r = t.updateNodePositions,
                        i = t.snapToGrid,
                        a = t.snapGrid,
                        o = t.nodeInternals,
                        s = t.nodeExtent,
                        c = t.onNodeDrag,
                        u = t.onSelectionDrag,
                        d = b(e);
                      if (
                        (g.current.x !== d.x || g.current.y !== d.y) &&
                        y.current
                      ) {
                        (g.current = d),
                          (y.current = y.current.map(function (e) {
                            return (function (e, t, r, i, a, o) {
                              var s = (0, n._)(i, 2),
                                l = s[0],
                                c = s[1],
                                u = e.extent || o,
                                d = {
                                  x: t.x - e.distance.x,
                                  y: t.y - e.distance.y,
                                };
                              if (
                                (r &&
                                  ((d.x = l * Math.round(d.x / l)),
                                  (d.y = c * Math.round(d.y / c))),
                                "parent" === e.extent)
                              )
                                if (e.parentNode && e.width && e.height) {
                                  var f = a.get(e.parentNode);
                                  u =
                                    null != f &&
                                    f.positionAbsolute &&
                                    null != f &&
                                    f.width &&
                                    null != f &&
                                    f.height
                                      ? [
                                          [
                                            f.positionAbsolute.x,
                                            f.positionAbsolute.y,
                                          ],
                                          [
                                            f.positionAbsolute.x +
                                              f.width -
                                              e.width,
                                            f.positionAbsolute.y +
                                              f.height -
                                              e.height,
                                          ],
                                        ]
                                      : u;
                                } else u = o;
                              else if (e.extent && e.parentNode) {
                                var m,
                                  h,
                                  p,
                                  y,
                                  g = a.get(e.parentNode),
                                  b =
                                    null !==
                                      (m =
                                        null == g ||
                                        null === (h = g.positionAbsolute) ||
                                        void 0 === h
                                          ? void 0
                                          : h.x) && void 0 !== m
                                      ? m
                                      : 0,
                                  v =
                                    null !==
                                      (p =
                                        null == g ||
                                        null === (y = g.positionAbsolute) ||
                                        void 0 === y
                                          ? void 0
                                          : y.y) && void 0 !== p
                                      ? p
                                      : 0;
                                u = [
                                  [e.extent[0][0] + b, e.extent[0][1] + v],
                                  [e.extent[1][0] + b, e.extent[1][1] + v],
                                ];
                              }
                              var B = { x: 0, y: 0 };
                              if (e.parentNode) {
                                var w,
                                  _,
                                  M,
                                  S,
                                  z = a.get(e.parentNode);
                                B = {
                                  x:
                                    null !==
                                      (w =
                                        null == z ||
                                        null === (_ = z.positionAbsolute) ||
                                        void 0 === _
                                          ? void 0
                                          : _.x) && void 0 !== w
                                      ? w
                                      : 0,
                                  y:
                                    null !==
                                      (M =
                                        null == z ||
                                        null === (S = z.positionAbsolute) ||
                                        void 0 === S
                                          ? void 0
                                          : S.y) && void 0 !== M
                                      ? M
                                      : 0,
                                };
                              }
                              return (
                                (e.positionAbsolute = u ? (0, n.m)(d, u) : d),
                                (e.position = {
                                  x: e.positionAbsolute.x - B.x,
                                  y: e.positionAbsolute.y - B.y,
                                }),
                                e
                              );
                            })(e, d, i, a, o, s);
                          }));
                        var f = l ? c : vt(u);
                        if ((r(y.current, !0, !0), h(!0), f)) {
                          var m = bt({
                              nodeId: l,
                              dragItems: y.current,
                              nodeInternals: o,
                            }),
                            v = (0, n._)(m, 2),
                            B = v[0],
                            w = v[1];
                          f(e.sourceEvent, B, w);
                        }
                      }
                      e.on("end", function (e) {
                        if ((h(!1), y.current)) {
                          var t = p.getState(),
                            r = t.updateNodePositions,
                            i = t.nodeInternals,
                            a = t.onNodeDragStop,
                            o = t.onSelectionDragStop,
                            s = l ? a : vt(o);
                          if ((r(y.current, !1, !1), s)) {
                            var c = bt({
                                nodeId: l,
                                dragItems: y.current,
                                nodeInternals: i,
                              }),
                              u = (0, n._)(c, 2),
                              d = u[0],
                              f = u[1];
                            s(e.sourceEvent, d, f);
                          }
                        }
                      });
                    })
                    .filter(function (e) {
                      var r = e.target;
                      return (
                        !e.button &&
                        (!o || !yt(r, ".".concat(o), t)) &&
                        (!s || yt(r, s, t))
                      );
                    });
                  return (
                    e.call(r),
                    function () {
                      e.on(".drag", null);
                    }
                  );
                }
                e.on(".drag", null);
              }
            },
            [t, a, o, s, c, p, l, u, b],
          ),
          m
        );
      }
      function wt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var _t = function (e) {
          return (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? wt(Object(r), !0).forEach(function (t) {
                    (0, n.a)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : wt(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t),
                    );
                  });
            }
            return e;
          })(
            {
              transformString: "translate("
                .concat(e.transform[0], "px,")
                .concat(e.transform[1], "px) scale(")
                .concat(e.transform[2], ")"),
              userSelectionActive: e.userSelectionActive,
            },
            (0, n.o)(
              Array.from(e.nodeInternals.values()).filter(function (e) {
                return e.selected;
              }),
            ),
          );
        },
        Mt = function (e) {
          var t = Array.from(e.nodeInternals.values()).filter(function (e) {
            return e.selected;
          });
          return (0, n.o)(t);
        };
      function St(e) {
        var t = e.onSelectionContextMenu,
          r = e.noPanClassName,
          o = (0, n.u)(),
          l = (0, n.b)(_t, s),
          c = l.transformString,
          u = l.userSelectionActive,
          d = (0, n.b)(Mt, s),
          f = d.width,
          m = d.height,
          h = d.x,
          p = d.y,
          y = (0, i.useRef)(null);
        if ((Bt({ nodeRef: y }), u || !f || !m)) return null;
        var g = t
          ? function (e) {
              var r = Array.from(o.getState().nodeInternals.values()).filter(
                function (e) {
                  return e.selected;
                },
              );
              t(e, r);
            }
          : void 0;
        return i.createElement(
          "div",
          {
            className: a([
              "react-flow__nodesselection",
              "react-flow__container",
              r,
            ]),
            style: { transform: c },
          },
          i.createElement("div", {
            ref: y,
            className: "react-flow__nodesselection-rect",
            onContextMenu: g,
            style: { width: f, height: m, top: p, left: h },
          }),
        );
      }
      var zt = (0, i.memo)(St),
        Et = function (e) {
          return e.nodesSelectionActive;
        },
        Ot = function (e) {
          var t = e.children,
            r = e.onPaneClick,
            a = e.onPaneContextMenu,
            o = e.onPaneScroll,
            c = e.deleteKeyCode,
            u = e.onMove,
            d = e.onMoveStart,
            f = e.onMoveEnd,
            m = e.selectionKeyCode,
            h = e.multiSelectionKeyCode,
            p = e.zoomActivationKeyCode,
            y = e.elementsSelectable,
            g = e.zoomOnScroll,
            b = e.zoomOnPinch,
            v = e.panOnScroll,
            B = e.panOnScrollSpeed,
            w = e.panOnScrollMode,
            _ = e.zoomOnDoubleClick,
            M = e.panOnDrag,
            S = e.translateExtent,
            z = e.minZoom,
            E = e.maxZoom,
            O = e.defaultZoom,
            F = e.defaultPosition,
            R = e.preventScrolling,
            j = e.onSelectionContextMenu,
            x = e.noWheelClassName,
            C = e.noPanClassName,
            T = (0, n.u)(),
            W = (0, n.b)(Et),
            P = Qe(m);
          !(function (e) {
            var t = e.deleteKeyCode,
              r = e.multiSelectionKeyCode,
              a = (0, n.u)(),
              o = (0, n.b)(rt, s),
              c = o.onNodesChange,
              u = o.onEdgesChange,
              d = Qe(t),
              f = Qe(r);
            (0, i.useEffect)(
              function () {
                var e = a.getState(),
                  t = e.nodeInternals,
                  r = e.edges,
                  i = e.hasDefaultNodes,
                  o = e.hasDefaultEdges,
                  s = e.onNodesDelete,
                  f = e.onEdgesDelete,
                  m = Array.from(t.values()).reduce(function (e, t) {
                    return (
                      ((!t.selected &&
                        t.parentNode &&
                        e.find(function (e) {
                          return e.id === t.parentNode;
                        })) ||
                        t.selected) &&
                        e.push(t),
                      e
                    );
                  }, []),
                  h = r.filter(function (e) {
                    return e.selected;
                  });
                if (d && (m || h)) {
                  var p = (0, n.e)(m, r),
                    y = [].concat(l(h), l(p)),
                    g = y.reduce(function (e, t) {
                      return e.includes(t.id) || e.push(t.id), e;
                    }, []);
                  if (
                    ((o || i) &&
                      (o &&
                        a.setState({
                          edges: r.filter(function (e) {
                            return !g.includes(e.id);
                          }),
                        }),
                      i &&
                        (m.forEach(function (e) {
                          t.delete(e.id);
                        }),
                        a.setState({ nodeInternals: new Map(t) }))),
                    g.length > 0 && (null == f || f(y), u))
                  ) {
                    var b = g.map(function (e) {
                      return { id: e, type: "remove" };
                    });
                    u(b);
                  }
                  if (m.length > 0 && (null == s || s(m), c)) {
                    var v = m.map(function (e) {
                      return { id: e.id, type: "remove" };
                    });
                    c(v);
                  }
                  a.setState({ nodesSelectionActive: !1 });
                }
              },
              [d, c, u],
            ),
              (0, i.useEffect)(
                function () {
                  a.setState({ multiSelectionActive: f });
                },
                [f],
              );
          })({ deleteKeyCode: c, multiSelectionKeyCode: h });
          var I = a
              ? function (e) {
                  return a(e);
                }
              : void 0,
            N = o
              ? function (e) {
                  return o(e);
                }
              : void 0;
          return i.createElement(
            ot,
            {
              onMove: u,
              onMoveStart: d,
              onMoveEnd: f,
              selectionKeyPressed: P,
              elementsSelectable: y,
              zoomOnScroll: g,
              zoomOnPinch: b,
              panOnScroll: v,
              panOnScrollSpeed: B,
              panOnScrollMode: w,
              zoomOnDoubleClick: _,
              panOnDrag: M,
              translateExtent: S,
              minZoom: z,
              maxZoom: E,
              defaultZoom: O,
              defaultPosition: F,
              zoomActivationKeyCode: p,
              preventScrolling: R,
              noWheelClassName: x,
              noPanClassName: C,
            },
            t,
            i.createElement(ft, { selectionKeyPressed: P }),
            W &&
              i.createElement(zt, {
                onSelectionContextMenu: j,
                noPanClassName: C,
              }),
            i.createElement("div", {
              className: "react-flow__pane react-flow__container",
              onClick: function (e) {
                null == r || r(e),
                  T.getState().resetSelectedElements(),
                  T.setState({ nodesSelectionActive: !1 });
              },
              onContextMenu: I,
              onWheel: N,
            }),
          );
        };
      Ot.displayName = "FlowRenderer";
      var Ft = (0, i.memo)(Ot);
      var Rt = function (e) {
          return {
            nodesDraggable: e.nodesDraggable,
            nodesConnectable: e.nodesConnectable,
            elementsSelectable: e.elementsSelectable,
            updateNodeDimensions: e.updateNodeDimensions,
          };
        },
        jt = function (e) {
          var t,
            r = (0, n.b)(Rt, s),
            a = r.nodesDraggable,
            o = r.nodesConnectable,
            l = r.elementsSelectable,
            c = r.updateNodeDimensions,
            u =
              ((t = e.onlyRenderVisibleElements),
              (0, n.b)(
                (0, i.useCallback)(
                  function (e) {
                    return t
                      ? (0, n.k)(
                          e.nodeInternals,
                          { x: 0, y: 0, width: e.width, height: e.height },
                          e.transform,
                          !0,
                        )
                      : Array.from(e.nodeInternals.values());
                  },
                  [t],
                ),
              )),
            d = (0, i.useRef)(),
            f = (0, i.useMemo)(function () {
              if ("undefined" == typeof ResizeObserver) return null;
              var e = new ResizeObserver(function (e) {
                var t = e.map(function (e) {
                  return {
                    id: e.target.getAttribute("data-id"),
                    nodeElement: e.target,
                    forceUpdate: !0,
                  };
                });
                c(t);
              });
              return (d.current = e), e;
            }, []);
          return (
            (0, i.useEffect)(function () {
              return function () {
                var e;
                null == d ||
                  null === (e = d.current) ||
                  void 0 === e ||
                  e.disconnect();
              };
            }, []),
            i.createElement(
              "div",
              { className: "react-flow__nodes react-flow__container" },
              u.map(function (t) {
                var r,
                  s,
                  c,
                  u,
                  d,
                  m,
                  h,
                  p = t.type || "default";
                e.nodeTypes[p] || (p = "default");
                var y = e.nodeTypes[p] || e.nodeTypes.default,
                  g = !!(t.draggable || (a && void 0 === t.draggable)),
                  b = !!(t.selectable || (l && void 0 === t.selectable)),
                  v = !!(t.connectable || (o && void 0 === t.connectable));
                return i.createElement(y, {
                  key: t.id,
                  id: t.id,
                  className: t.className,
                  style: t.style,
                  type: p,
                  data: t.data,
                  sourcePosition: t.sourcePosition || n.P.Bottom,
                  targetPosition: t.targetPosition || n.P.Top,
                  hidden: t.hidden,
                  xPos:
                    null !==
                      (r =
                        null === (s = t.positionAbsolute) || void 0 === s
                          ? void 0
                          : s.x) && void 0 !== r
                      ? r
                      : 0,
                  yPos:
                    null !==
                      (c =
                        null === (u = t.positionAbsolute) || void 0 === u
                          ? void 0
                          : u.y) && void 0 !== c
                      ? c
                      : 0,
                  selectNodesOnDrag: e.selectNodesOnDrag,
                  onClick: e.onNodeClick,
                  onMouseEnter: e.onNodeMouseEnter,
                  onMouseMove: e.onNodeMouseMove,
                  onMouseLeave: e.onNodeMouseLeave,
                  onContextMenu: e.onNodeContextMenu,
                  onDoubleClick: e.onNodeDoubleClick,
                  selected: !!t.selected,
                  isDraggable: g,
                  isSelectable: b,
                  isConnectable: v,
                  resizeObserver: f,
                  dragHandle: t.dragHandle,
                  zIndex:
                    null !==
                      (d =
                        null === (m = t[n.i]) || void 0 === m ? void 0 : m.z) &&
                    void 0 !== d
                      ? d
                      : 0,
                  isParent: !(
                    null === (h = t[n.i]) ||
                    void 0 === h ||
                    !h.isParent
                  ),
                  noDragClassName: e.noDragClassName,
                  noPanClassName: e.noPanClassName,
                  initialized: !!t.width && !!t.height,
                });
              }),
            )
          );
        };
      jt.displayName = "NodeRenderer";
      var xt,
        Ct = (0, i.memo)(jt);
      function Tt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Wt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Tt(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Tt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      var Pt,
        It =
          ((xt = {}),
          (0, n.a)(xt, n.P.Left, n.P.Right),
          (0, n.a)(xt, n.P.Right, n.P.Left),
          (0, n.a)(xt, n.P.Top, n.P.Bottom),
          (0, n.a)(xt, n.P.Bottom, n.P.Top),
          xt),
        Nt = function (e) {
          var t,
            r,
            a,
            o,
            l,
            c = e.connectionNodeId,
            u = e.connectionHandleType,
            d = e.connectionLineStyle,
            f = e.connectionLineType,
            m = void 0 === f ? n.q.Bezier : f,
            h = e.isConnectable,
            p = e.CustomConnectionLineComponent,
            y = (0, n.b)(
              (0, i.useCallback)(
                function (e) {
                  return {
                    fromNode: e.nodeInternals.get(c),
                    handleId: e.connectionHandleId,
                    toX:
                      (e.connectionPosition.x - e.transform[0]) /
                      e.transform[2],
                    toY:
                      (e.connectionPosition.y - e.transform[1]) /
                      e.transform[2],
                  };
                },
                [c],
              ),
              s,
            ),
            g = y.fromNode,
            b = y.handleId,
            v = y.toX,
            B = y.toY,
            w =
              null == g || null === (t = g[n.i]) || void 0 === t
                ? void 0
                : t.handleBounds;
          if (!g || !h || null == w || !w[u]) return null;
          var _ = w[u],
            M = b
              ? _.find(function (e) {
                  return e.id === b;
                })
              : _[0],
            S = M
              ? M.x + M.width / 2
              : (null !== (r = null == g ? void 0 : g.width) && void 0 !== r
                  ? r
                  : 0) / 2,
            z = M
              ? M.y + M.height / 2
              : null !== (a = null == g ? void 0 : g.height) && void 0 !== a
              ? a
              : 0,
            E =
              ((null == g || null === (o = g.positionAbsolute) || void 0 === o
                ? void 0
                : o.x) || 0) + S,
            O =
              ((null == g || null === (l = g.positionAbsolute) || void 0 === l
                ? void 0
                : l.y) || 0) + z,
            F = null == M ? void 0 : M.position;
          if (!F) return null;
          var R,
            j,
            x,
            C,
            T,
            W,
            P = It[F];
          switch (u) {
            case "source":
              (R = E), (j = O), (x = F), (C = v), (T = B), (W = P);
              break;
            case "target":
              (R = v), (j = B), (x = P), (C = E), (T = O), (W = F);
          }
          if (p)
            return i.createElement(
              "g",
              { className: "react-flow__connection" },
              i.createElement(p, {
                connectionLineType: m,
                connectionLineStyle: d,
                fromNode: g,
                fromHandle: M,
                fromX: E,
                fromY: O,
                toX: v,
                toY: B,
                fromPosition: F,
                toPosition: P,
                sourcePosition: x,
                targetPosition: W,
                sourceNode: g,
                sourceHandle: M,
                targetX: C,
                targetY: T,
                sourceX: R,
                sourceY: j,
              }),
            );
          var I = "",
            N = {
              sourceX: R,
              sourceY: j,
              sourcePosition: x,
              targetX: C,
              targetY: T,
              targetPosition: W,
            };
          return (
            (I =
              m === n.q.Bezier
                ? me(N)
                : m === n.q.Step
                ? ae(Wt(Wt({}, N), {}, { borderRadius: 0 }))
                : m === n.q.SmoothStep
                ? ae(N)
                : m === n.q.SimpleBezier
                ? Z(N)
                : "M".concat(R, ",").concat(j, " ").concat(C, ",").concat(T)),
            i.createElement(
              "g",
              { className: "react-flow__connection" },
              i.createElement("path", {
                d: I,
                className: "react-flow__connection-path",
                style: d,
              }),
            )
          );
        };
      function At(e) {
        return (
          (At =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          At(e)
        );
      }
      var Dt =
        ((Pt = {}),
        (0, n.a)(Pt, n.M.Arrow, function (e) {
          var t = e.color,
            r = void 0 === t ? "none" : t,
            n = e.strokeWidth,
            a = void 0 === n ? 1 : n;
          return i.createElement("polyline", {
            stroke: r,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: a,
            fill: "none",
            points: "-5,-4 0,0 -5,4",
          });
        }),
        (0, n.a)(Pt, n.M.ArrowClosed, function (e) {
          var t = e.color,
            r = void 0 === t ? "none" : t,
            n = e.strokeWidth,
            a = void 0 === n ? 1 : n;
          return i.createElement("polyline", {
            stroke: r,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: a,
            fill: r,
            points: "-5,-4 0,0 -5,4 -5,-4",
          });
        }),
        Pt);
      function Ut(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var kt = function (e) {
          var t = e.id,
            r = e.type,
            n = e.color,
            a = e.width,
            o = void 0 === a ? 12.5 : a,
            s = e.height,
            l = void 0 === s ? 12.5 : s,
            c = e.markerUnits,
            u = void 0 === c ? "strokeWidth" : c,
            d = e.strokeWidth,
            f = e.orient,
            m = void 0 === f ? "auto" : f,
            h = (function (e) {
              return (0, i.useMemo)(
                function () {
                  return Dt.hasOwnProperty(e)
                    ? Dt[e]
                    : function () {
                        return null;
                      };
                },
                [e],
              );
            })(r);
          return i.createElement(
            "marker",
            {
              className: "react-flow__arrowhead",
              id: t,
              markerWidth: "".concat(o),
              markerHeight: "".concat(l),
              viewBox: "-10 -10 20 20",
              markerUnits: u,
              orient: m,
              refX: "0",
              refY: "0",
            },
            i.createElement(h, { color: n, strokeWidth: d }),
          );
        },
        Xt = function (e) {
          var t = e.defaultColor,
            r = e.rfId;
          return function (e) {
            var i = [];
            return e.edges
              .reduce(function (e, a) {
                return (
                  [a.markerStart, a.markerEnd].forEach(function (a) {
                    if (a && "object" === At(a)) {
                      var o = (0, n.d)(a, r);
                      i.includes(o) ||
                        (e.push(
                          (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {};
                              t % 2
                                ? Ut(Object(r), !0).forEach(function (t) {
                                    (0, n.a)(e, t, r[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                    e,
                                    Object.getOwnPropertyDescriptors(r),
                                  )
                                : Ut(Object(r)).forEach(function (t) {
                                    Object.defineProperty(
                                      e,
                                      t,
                                      Object.getOwnPropertyDescriptor(r, t),
                                    );
                                  });
                            }
                            return e;
                          })({ id: o, color: a.color || t }, a),
                        ),
                        i.push(o));
                    }
                  }),
                  e
                );
              }, [])
              .sort(function (e, t) {
                return e.id.localeCompare(t.id);
              });
          };
        },
        Lt = function (e) {
          var t = e.defaultColor,
            r = e.rfId,
            a = (0, n.b)(
              (0, i.useCallback)(Xt({ defaultColor: t, rfId: r }), [t, r]),
              function (e, t) {
                return !(
                  e.length !== t.length ||
                  e.some(function (e, r) {
                    return e.id !== t[r].id;
                  })
                );
              },
            );
          return i.createElement(
            "defs",
            null,
            a.map(function (e) {
              return i.createElement(kt, {
                id: e.id,
                key: e.id,
                type: e.type,
                color: e.color,
                width: e.width,
                height: e.height,
                markerUnits: e.markerUnits,
                strokeWidth: e.strokeWidth,
                orient: e.orient,
              });
            }),
          );
        };
      Lt.displayName = "MarkerDefinitions";
      var qt = (0, i.memo)(Lt),
        Zt = [{ level: 0, isMaxLevel: !0, edges: [] }];
      function $t(e, t, r) {
        return (function (e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = -1,
            a = e.reduce(function (e, a) {
              var o,
                s,
                l,
                c,
                u = (0, n.s)(a.zIndex),
                d = u ? a.zIndex : 0;
              return (
                r &&
                  (d = u
                    ? a.zIndex
                    : Math.max(
                        (null === (o = t.get(a.source)) ||
                        void 0 === o ||
                        null === (s = o[n.i]) ||
                        void 0 === s
                          ? void 0
                          : s.z) || 0,
                        (null === (l = t.get(a.target)) ||
                        void 0 === l ||
                        null === (c = l[n.i]) ||
                        void 0 === c
                          ? void 0
                          : c.z) || 0,
                      )),
                e[d] ? e[d].push(a) : (e[d] = [a]),
                (i = d > i ? d : i),
                e
              );
            }, {}),
            o = Object.entries(a).map(function (e) {
              var t = (0, n._)(e, 2),
                r = +t[0];
              return { edges: t[1], level: r, isMaxLevel: r === i };
            });
          return 0 === o.length ? Zt : o;
        })(
          (0, n.b)(
            (0, i.useCallback)(
              function (r) {
                return e
                  ? r.edges.filter(function (e) {
                      var i = t.get(e.source),
                        a = t.get(e.target);
                      return (
                        (null == i ? void 0 : i.width) &&
                        (null == i ? void 0 : i.height) &&
                        (null == a ? void 0 : a.width) &&
                        (null == a ? void 0 : a.height) &&
                        (function (e) {
                          var t = e.sourcePos,
                            r = e.targetPos,
                            i = e.sourceWidth,
                            a = e.sourceHeight,
                            o = e.targetWidth,
                            s = e.targetHeight,
                            l = e.width,
                            c = e.height,
                            u = e.transform,
                            d = {
                              x: Math.min(t.x, r.x),
                              y: Math.min(t.y, r.y),
                              x2: Math.max(t.x + i, r.x + o),
                              y2: Math.max(t.y + a, r.y + s),
                            };
                          d.x === d.x2 && (d.x2 += 1),
                            d.y === d.y2 && (d.y2 += 1);
                          var f = (0, n.r)({
                              x: (0 - u[0]) / u[2],
                              y: (0 - u[1]) / u[2],
                              width: l / u[2],
                              height: c / u[2],
                            }),
                            m = Math.max(
                              0,
                              Math.min(f.x2, d.x2) - Math.max(f.x, d.x),
                            ),
                            h = Math.max(
                              0,
                              Math.min(f.y2, d.y2) - Math.max(f.y, d.y),
                            );
                          return Math.ceil(m * h) > 0;
                        })({
                          sourcePos: i.positionAbsolute || { x: 0, y: 0 },
                          targetPos: a.positionAbsolute || { x: 0, y: 0 },
                          sourceWidth: i.width,
                          sourceHeight: i.height,
                          targetWidth: a.width,
                          targetHeight: a.height,
                          width: r.width,
                          height: r.height,
                          transform: r.transform,
                        })
                      );
                    })
                  : r.edges;
              },
              [e, t],
            ),
          ),
          t,
          r,
        );
      }
      var Vt = function (e) {
          return {
            connectionNodeId: e.connectionNodeId,
            connectionHandleType: e.connectionHandleType,
            nodesConnectable: e.nodesConnectable,
            elementsSelectable: e.elementsSelectable,
            width: e.width,
            height: e.height,
            connectionMode: e.connectionMode,
            nodeInternals: e.nodeInternals,
          };
        },
        Yt = function (e) {
          var t = (0, n.b)(Vt, s),
            r = t.connectionNodeId,
            o = t.connectionHandleType,
            l = t.nodesConnectable,
            c = t.elementsSelectable,
            u = t.width,
            d = t.height,
            f = t.connectionMode,
            m = t.nodeInternals,
            h = $t(e.onlyRenderVisibleElements, m, e.elevateEdgesOnSelect);
          if (!u) return null;
          var p = e.connectionLineType,
            y = e.defaultMarkerColor,
            g = e.connectionLineStyle,
            b = e.connectionLineComponent,
            v = e.connectionLineContainerStyle,
            B = r && o;
          return i.createElement(
            i.Fragment,
            null,
            h.map(function (t) {
              var r = t.level,
                o = t.edges,
                s = t.isMaxLevel;
              return i.createElement(
                "svg",
                {
                  key: r,
                  style: { zIndex: r },
                  width: u,
                  height: d,
                  className: "react-flow__edges react-flow__container",
                },
                s && i.createElement(qt, { defaultColor: y, rfId: e.rfId }),
                i.createElement(
                  "g",
                  null,
                  o.map(function (t) {
                    var r = Ge(m, t.source),
                      o = (0, n._)(r, 3),
                      s = o[0],
                      l = o[1],
                      u = o[2],
                      d = Ge(m, t.target),
                      h = (0, n._)(d, 3),
                      p = h[0],
                      y = h[1],
                      g = h[2];
                    if (!u || !g) return null;
                    var b = t.type || "default";
                    e.edgeTypes[b] ||
                      (console.warn(
                        '[React Flow]: Edge type "'.concat(
                          b,
                          '" not found. Using fallback type "default". Help: https://reactflow.dev/error#300',
                        ),
                      ),
                      (b = "default"));
                    var v = e.edgeTypes[b] || e.edgeTypes.default,
                      B = f === n.C.Strict ? y.target : y.target || y.source,
                      w = He(l.source, t.sourceHandle || null),
                      _ = He(B, t.targetHandle || null),
                      M = (null == w ? void 0 : w.position) || n.P.Bottom,
                      S = (null == _ ? void 0 : _.position) || n.P.Top;
                    if (!w) return null;
                    if (!_) return null;
                    var z = (function (e, t, r, n, i, a) {
                        var o = Ye(r, e, t),
                          s = Ye(a, n, i);
                        return {
                          sourceX: o.x,
                          sourceY: o.y,
                          targetX: s.x,
                          targetY: s.y,
                        };
                      })(s, w, M, p, _, S),
                      E = z.sourceX,
                      O = z.sourceY,
                      F = z.targetX,
                      R = z.targetY;
                    return i.createElement(v, {
                      key: t.id,
                      id: t.id,
                      className: a([t.className, e.noPanClassName]),
                      type: b,
                      data: t.data,
                      selected: !!t.selected,
                      animated: !!t.animated,
                      hidden: !!t.hidden,
                      label: t.label,
                      labelStyle: t.labelStyle,
                      labelShowBg: t.labelShowBg,
                      labelBgStyle: t.labelBgStyle,
                      labelBgPadding: t.labelBgPadding,
                      labelBgBorderRadius: t.labelBgBorderRadius,
                      style: t.style,
                      source: t.source,
                      target: t.target,
                      sourceHandleId: t.sourceHandle,
                      targetHandleId: t.targetHandle,
                      markerEnd: t.markerEnd,
                      markerStart: t.markerStart,
                      sourceX: E,
                      sourceY: O,
                      targetX: F,
                      targetY: R,
                      sourcePosition: M,
                      targetPosition: S,
                      elementsSelectable: c,
                      onEdgeUpdate: e.onEdgeUpdate,
                      onContextMenu: e.onEdgeContextMenu,
                      onMouseEnter: e.onEdgeMouseEnter,
                      onMouseMove: e.onEdgeMouseMove,
                      onMouseLeave: e.onEdgeMouseLeave,
                      onClick: e.onEdgeClick,
                      edgeUpdaterRadius: e.edgeUpdaterRadius,
                      onEdgeDoubleClick: e.onEdgeDoubleClick,
                      onEdgeUpdateStart: e.onEdgeUpdateStart,
                      onEdgeUpdateEnd: e.onEdgeUpdateEnd,
                      rfId: e.rfId,
                    });
                  }),
                ),
              );
            }),
            B &&
              i.createElement(
                "svg",
                {
                  style: v,
                  width: u,
                  height: d,
                  className:
                    "react-flow__edges react-flow__connectionline react-flow__container",
                },
                i.createElement(Nt, {
                  connectionNodeId: r,
                  connectionHandleType: o,
                  connectionLineStyle: g,
                  connectionLineType: p,
                  isConnectable: l,
                  CustomConnectionLineComponent: b,
                }),
              ),
          );
        };
      Yt.displayName = "EdgeRenderer";
      var Ht = (0, i.memo)(Yt),
        Gt = function (e) {
          return "translate("
            .concat(e.transform[0], "px,")
            .concat(e.transform[1], "px) scale(")
            .concat(e.transform[2], ")");
        };
      function Kt(e) {
        var t = e.children,
          r = (0, n.b)(Gt);
        return i.createElement(
          "div",
          {
            className: "react-flow__viewport react-flow__container",
            style: { transform: r },
          },
          t,
        );
      }
      var Qt = function (e) {
        var t = e.nodeTypes,
          r = e.edgeTypes,
          n = e.onMove,
          a = e.onMoveStart,
          o = e.onMoveEnd,
          s = e.onInit,
          l = e.onNodeClick,
          c = e.onEdgeClick,
          u = e.onNodeDoubleClick,
          d = e.onEdgeDoubleClick,
          f = e.onNodeMouseEnter,
          m = e.onNodeMouseMove,
          p = e.onNodeMouseLeave,
          y = e.onNodeContextMenu,
          g = e.onSelectionContextMenu,
          b = e.connectionLineType,
          v = e.connectionLineStyle,
          B = e.connectionLineComponent,
          w = e.connectionLineContainerStyle,
          _ = e.selectionKeyCode,
          M = e.multiSelectionKeyCode,
          S = e.zoomActivationKeyCode,
          z = e.deleteKeyCode,
          E = e.onlyRenderVisibleElements,
          O = e.elementsSelectable,
          F = e.selectNodesOnDrag,
          R = e.translateExtent,
          j = e.minZoom,
          x = e.maxZoom,
          C = e.defaultZoom,
          T = e.defaultPosition,
          W = e.preventScrolling,
          P = e.defaultMarkerColor,
          I = e.zoomOnScroll,
          N = e.zoomOnPinch,
          A = e.panOnScroll,
          D = e.panOnScrollSpeed,
          U = e.panOnScrollMode,
          k = e.zoomOnDoubleClick,
          X = e.panOnDrag,
          L = e.onPaneClick,
          q = e.onPaneScroll,
          Z = e.onPaneContextMenu,
          $ = e.onEdgeUpdate,
          V = e.onEdgeContextMenu,
          Y = e.onEdgeMouseEnter,
          H = e.onEdgeMouseMove,
          G = e.onEdgeMouseLeave,
          K = e.edgeUpdaterRadius,
          Q = e.onEdgeUpdateStart,
          J = e.onEdgeUpdateEnd,
          ee = e.noDragClassName,
          te = e.noWheelClassName,
          re = e.noPanClassName,
          ne = e.elevateEdgesOnSelect,
          ie = e.id;
        return (
          (function (e) {
            var t = h(),
              r = (0, i.useRef)(!1);
            (0, i.useEffect)(
              function () {
                !r.current &&
                  t.viewportInitialized &&
                  e &&
                  (setTimeout(function () {
                    return e(t);
                  }, 1),
                  (r.current = !0));
              },
              [e, t.viewportInitialized],
            );
          })(s),
          i.createElement(
            Ft,
            {
              onPaneClick: L,
              onPaneContextMenu: Z,
              onPaneScroll: q,
              deleteKeyCode: z,
              selectionKeyCode: _,
              multiSelectionKeyCode: M,
              zoomActivationKeyCode: S,
              elementsSelectable: O,
              onMove: n,
              onMoveStart: a,
              onMoveEnd: o,
              zoomOnScroll: I,
              zoomOnPinch: N,
              zoomOnDoubleClick: k,
              panOnScroll: A,
              panOnScrollSpeed: D,
              panOnScrollMode: U,
              panOnDrag: X,
              translateExtent: R,
              minZoom: j,
              maxZoom: x,
              defaultZoom: C,
              defaultPosition: T,
              onSelectionContextMenu: g,
              preventScrolling: W,
              noDragClassName: ee,
              noWheelClassName: te,
              noPanClassName: re,
            },
            i.createElement(
              Kt,
              null,
              i.createElement(Ht, {
                edgeTypes: r,
                onEdgeClick: c,
                onEdgeDoubleClick: d,
                connectionLineType: b,
                connectionLineStyle: v,
                connectionLineComponent: B,
                connectionLineContainerStyle: w,
                onEdgeUpdate: $,
                onlyRenderVisibleElements: E,
                onEdgeContextMenu: V,
                onEdgeMouseEnter: Y,
                onEdgeMouseMove: H,
                onEdgeMouseLeave: G,
                onEdgeUpdateStart: Q,
                onEdgeUpdateEnd: J,
                edgeUpdaterRadius: K,
                defaultMarkerColor: P,
                noPanClassName: re,
                elevateEdgesOnSelect: !!ne,
                rfId: ie,
              }),
              i.createElement(Ct, {
                nodeTypes: t,
                onNodeClick: l,
                onNodeDoubleClick: u,
                onNodeMouseEnter: f,
                onNodeMouseMove: m,
                onNodeMouseLeave: p,
                onNodeContextMenu: y,
                selectNodesOnDrag: F,
                onlyRenderVisibleElements: E,
                noPanClassName: re,
                noDragClassName: ee,
              }),
            ),
          )
        );
      };
      Qt.displayName = "GraphView";
      var Jt = (0, i.memo)(Qt),
        er = function () {
          return null;
        };
      function tr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function rr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tr(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : tr(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      er.displayName = "GroupNode";
      var nr = function (e) {
        var t = function (t) {
          var r = t.id,
            o = t.type,
            s = t.data,
            l = t.xPos,
            c = t.yPos,
            u = t.selected,
            d = t.onClick,
            f = t.onMouseEnter,
            m = t.onMouseMove,
            h = t.onMouseLeave,
            p = t.onContextMenu,
            y = t.onDoubleClick,
            g = t.style,
            b = t.className,
            v = t.isDraggable,
            B = t.isSelectable,
            w = t.isConnectable,
            _ = t.selectNodesOnDrag,
            M = t.sourcePosition,
            S = t.targetPosition,
            z = t.hidden,
            E = t.resizeObserver,
            O = t.dragHandle,
            F = t.zIndex,
            R = t.isParent,
            j = t.noPanClassName,
            x = t.noDragClassName,
            C = t.initialized,
            T = (0, n.u)(),
            W = (0, i.useRef)(null),
            P = (0, i.useRef)(M),
            I = (0, i.useRef)(S),
            N = (0, i.useRef)(o),
            A = B || v || d || f || m || h,
            D = (0, n.t)(r, T.getState, f),
            U = (0, n.t)(r, T.getState, m),
            k = (0, n.t)(r, T.getState, h),
            X = (0, n.t)(r, T.getState, p),
            L = (0, n.t)(r, T.getState, y);
          (0, i.useEffect)(
            function () {
              if (W.current && !z) {
                var e = W.current;
                return (
                  null == E || E.observe(e),
                  function () {
                    return null == E ? void 0 : E.unobserve(e);
                  }
                );
              }
            },
            [z],
          ),
            (0, i.useEffect)(
              function () {
                var e = N.current !== o,
                  t = P.current !== M,
                  n = I.current !== S;
                W.current &&
                  (e || t || n) &&
                  (e && (N.current = o),
                  t && (P.current = M),
                  n && (I.current = S),
                  T.getState().updateNodeDimensions([
                    { id: r, nodeElement: W.current, forceUpdate: !0 },
                  ]));
              },
              [r, o, M, S],
            );
          var q = Bt({
            nodeRef: W,
            disabled: z || !v,
            noDragClassName: x,
            handleSelector: O,
            nodeId: r,
            isSelectable: B,
            selectNodesOnDrag: _,
          });
          return z
            ? null
            : i.createElement(
                "div",
                {
                  className: a([
                    "react-flow__node",
                    "react-flow__node-".concat(o),
                    j,
                    b,
                    { selected: u, selectable: B, parent: R },
                  ]),
                  ref: W,
                  style: rr(
                    {
                      zIndex: F,
                      transform: "translate(".concat(l, "px,").concat(c, "px)"),
                      pointerEvents: A ? "all" : "none",
                      visibility: C ? "visible" : "hidden",
                    },
                    g,
                  ),
                  onMouseEnter: D,
                  onMouseMove: U,
                  onMouseLeave: k,
                  onContextMenu: X,
                  onClick: function (e) {
                    if ((!B || (_ && v) || (0, n.n)({ id: r, store: T }), d)) {
                      var t = T.getState().nodeInternals.get(r);
                      d(e, rr({}, t));
                    }
                  },
                  onDoubleClick: L,
                  "data-testid": "rf__node-".concat(r),
                  "data-id": r,
                },
                i.createElement(
                  ye,
                  { value: r },
                  i.createElement(e, {
                    id: r,
                    data: s,
                    type: o,
                    xPos: l,
                    yPos: c,
                    selected: u,
                    isConnectable: w,
                    sourcePosition: M,
                    targetPosition: S,
                    dragging: q,
                    dragHandle: O,
                    zIndex: F,
                  }),
                ),
              );
        };
        return (t.displayName = "NodeWrapper"), (0, i.memo)(t);
      };
      function ir(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ar(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ir(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ir(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function or(e) {
        var t = {
            input: nr(e.input || je),
            default: nr(e.default || Fe),
            output: nr(e.output || Ce),
            group: nr(e.group || er),
          },
          r = Object.keys(e)
            .filter(function (e) {
              return !["input", "default", "output", "group"].includes(e);
            })
            .reduce(function (t, r) {
              return (t[r] = nr(e[r] || Fe)), t;
            }, {});
        return ar(ar({}, t), r);
      }
      function sr(e, t) {
        (0, i.useRef)(null);
        return (0, i.useMemo)(
          function () {
            return t(e);
          },
          [e],
        );
      }
      function lr(e) {
        if (e && "undefined" != typeof document) {
          var t = document.head || document.getElementsByTagName("head")[0],
            r = document.createElement("style");
          t.appendChild(r), r.appendChild(document.createTextNode(e));
        }
      }
      var cr = function (e) {
        var t = e.children,
          r = !0;
        try {
          (0, n.u)();
        } catch (e) {
          r = !1;
        }
        return r
          ? i.createElement(i.Fragment, null, t)
          : i.createElement(n.v, { createStore: n.w }, t);
      };
      cr.displayName = "ReactFlowWrapper";
      var ur = [
        "nodes",
        "edges",
        "defaultNodes",
        "defaultEdges",
        "className",
        "nodeTypes",
        "edgeTypes",
        "onNodeClick",
        "onEdgeClick",
        "onInit",
        "onMove",
        "onMoveStart",
        "onMoveEnd",
        "onConnect",
        "onConnectStart",
        "onConnectStop",
        "onConnectEnd",
        "onClickConnectStart",
        "onClickConnectStop",
        "onClickConnectEnd",
        "onNodeMouseEnter",
        "onNodeMouseMove",
        "onNodeMouseLeave",
        "onNodeContextMenu",
        "onNodeDoubleClick",
        "onNodeDragStart",
        "onNodeDrag",
        "onNodeDragStop",
        "onNodesDelete",
        "onEdgesDelete",
        "onSelectionChange",
        "onSelectionDragStart",
        "onSelectionDrag",
        "onSelectionDragStop",
        "onSelectionContextMenu",
        "connectionMode",
        "connectionLineType",
        "connectionLineStyle",
        "connectionLineComponent",
        "connectionLineContainerStyle",
        "deleteKeyCode",
        "selectionKeyCode",
        "multiSelectionKeyCode",
        "zoomActivationKeyCode",
        "snapToGrid",
        "snapGrid",
        "onlyRenderVisibleElements",
        "selectNodesOnDrag",
        "nodesDraggable",
        "nodesConnectable",
        "elementsSelectable",
        "minZoom",
        "maxZoom",
        "defaultZoom",
        "defaultPosition",
        "translateExtent",
        "preventScrolling",
        "nodeExtent",
        "defaultMarkerColor",
        "zoomOnScroll",
        "zoomOnPinch",
        "panOnScroll",
        "panOnScrollSpeed",
        "panOnScrollMode",
        "zoomOnDoubleClick",
        "panOnDrag",
        "onPaneClick",
        "onPaneScroll",
        "onPaneContextMenu",
        "children",
        "onEdgeUpdate",
        "onEdgeContextMenu",
        "onEdgeDoubleClick",
        "onEdgeMouseEnter",
        "onEdgeMouseMove",
        "onEdgeMouseLeave",
        "onEdgeUpdateStart",
        "onEdgeUpdateEnd",
        "edgeUpdaterRadius",
        "onNodesChange",
        "onEdgesChange",
        "noDragClassName",
        "noWheelClassName",
        "noPanClassName",
        "fitView",
        "fitViewOptions",
        "connectOnClick",
        "attributionPosition",
        "proOptions",
        "defaultEdgeOptions",
        "elevateEdgesOnSelect",
      ];
      function dr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function fr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? dr(Object(r), !0).forEach(function (t) {
                (0, n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : dr(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      lr(
        ".react-flow{height:100%;overflow:hidden;position:relative;width:100%}.react-flow__container{height:100%;left:0;position:absolute;top:0;width:100%}.react-flow__pane{z-index:1}.react-flow__viewport{pointer-events:none;transform-origin:0 0;z-index:2}.react-flow__renderer{z-index:4}.react-flow__selectionpane{z-index:5}.react-flow .react-flow__edges{overflow:visible;pointer-events:none}.react-flow .react-flow__connectionline{z-index:1001}.react-flow__edge{pointer-events:visibleStroke}.react-flow__edge.inactive{pointer-events:none}@-webkit-keyframes dashdraw{0%{stroke-dashoffset:10}}@keyframes dashdraw{0%{stroke-dashoffset:10}}.react-flow__edge-path{fill:none}.react-flow__edge-textwrapper{pointer-events:all}.react-flow__edge-text{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.react-flow__connection{pointer-events:none}.react-flow__connection .animated{stroke-dasharray:5;-webkit-animation:dashdraw .5s linear infinite;animation:dashdraw .5s linear infinite}.react-flow__connection-path{fill:none}.react-flow__nodes{pointer-events:none;transform-origin:0 0}.react-flow__node{box-sizing:border-box;pointer-events:all;position:absolute;transform-origin:0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.react-flow__nodesselection{pointer-events:none;transform-origin:left top;z-index:3}.react-flow__nodesselection-rect{cursor:-webkit-grab;cursor:grab;pointer-events:all;position:absolute}.react-flow__handle{pointer-events:none;position:absolute}.react-flow__handle.connectable{pointer-events:all}.react-flow__handle-bottom{bottom:-4px;left:50%;top:auto;transform:translate(-50%)}.react-flow__handle-top{left:50%;top:-4px;transform:translate(-50%)}.react-flow__handle-left{left:-4px;top:50%;transform:translateY(-50%)}.react-flow__handle-right{right:-4px;top:50%;transform:translateY(-50%)}.react-flow__edgeupdater{cursor:move;pointer-events:all}.react-flow__controls{bottom:20px;left:15px;position:absolute;z-index:5}.react-flow__controls-button{border:none;height:24px;width:24px}.react-flow__controls-button svg{width:100%}.react-flow__minimap{bottom:20px;position:absolute;right:15px;z-index:5}.react-flow__attribution{background:hsla(0,0%,100%,.5);color:#999;font-size:10px;padding:2px 3px;position:absolute;z-index:1000}.react-flow__attribution a{color:#555;text-decoration:none}.react-flow__attribution.top{top:0}.react-flow__attribution.bottom{bottom:0}.react-flow__attribution.left{left:0}.react-flow__attribution.right{right:0}.react-flow__attribution.center{left:50%;transform:translateX(-50%)}",
      ),
        lr(
          ".react-flow__edge.selected .react-flow__edge-path{stroke:#555}.react-flow__edge.animated path{stroke-dasharray:5;-webkit-animation:dashdraw .5s linear infinite;animation:dashdraw .5s linear infinite}.react-flow__edge.updating .react-flow__edge-path{stroke:#777}.react-flow__edge-path{stroke:#b1b1b7;stroke-width:1}.react-flow__edge-text{font-size:10px}.react-flow__edge-textbg{fill:#fff}.react-flow__connection-path{stroke:#b1b1b7;stroke-width:1}.react-flow__node{cursor:-webkit-grab;cursor:grab}.react-flow__node-default,.react-flow__node-group,.react-flow__node-input,.react-flow__node-output{background:#fff;border:1px solid #1a192b;border-radius:3px;color:#222;font-size:12px;padding:10px;text-align:center;width:150px}.react-flow__node-default.selected,.react-flow__node-group.selected,.react-flow__node-input.selected,.react-flow__node-output.selected{box-shadow:0 0 0 .5px #1a192b}.react-flow__node-default .react-flow__handle,.react-flow__node-group .react-flow__handle,.react-flow__node-input .react-flow__handle,.react-flow__node-output .react-flow__handle{background:#1a192b}.react-flow__node-default.selectable:hover,.react-flow__node-group.selectable:hover,.react-flow__node-input.selectable:hover,.react-flow__node-output.selectable:hover{box-shadow:0 1px 4px 1px rgba(0,0,0,.08)}.react-flow__node-default.selectable.selected,.react-flow__node-group.selectable.selected,.react-flow__node-input.selectable.selected,.react-flow__node-output.selectable.selected{box-shadow:0 0 0 .5px #1a192b}.react-flow__node-group{background:hsla(0,0%,94%,.25);border-color:#1a192b}.react-flow__nodesselection-rect,.react-flow__selection{background:rgba(0,89,220,.08);border:1px dotted rgba(0,89,220,.8)}.react-flow__handle{background:#555;border:1px solid #fff;border-radius:100%;height:6px;width:6px}.react-flow__handle.connectable{cursor:crosshair}.react-flow__minimap{background-color:#fff}.react-flow__controls{box-shadow:0 0 2px 1px rgba(0,0,0,.08)}.react-flow__controls-button{align-items:center;background:#fefefe;border-bottom:1px solid #eee;box-sizing:content-box;cursor:pointer;display:flex;height:16px;justify-content:center;padding:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:16px}.react-flow__controls-button svg{max-height:12px;max-width:12px}.react-flow__controls-button:hover{background:#f4f4f4}",
        );
      var mr = { input: je, default: Fe, output: Ce },
        hr = {
          default: he,
          straight: ue,
          step: ce,
          smoothstep: oe,
          simplebezier: $,
        },
        pr = [15, 15],
        yr = [0, 0],
        gr = (0, i.forwardRef)(function (e, t) {
          var r = e.nodes,
            o = e.edges,
            s = e.defaultNodes,
            l = e.defaultEdges,
            c = e.className,
            u = e.nodeTypes,
            d = void 0 === u ? mr : u,
            f = e.edgeTypes,
            m = void 0 === f ? hr : f,
            h = e.onNodeClick,
            y = e.onEdgeClick,
            g = e.onInit,
            b = e.onMove,
            v = e.onMoveStart,
            B = e.onMoveEnd,
            w = e.onConnect,
            _ = e.onConnectStart,
            M = e.onConnectStop,
            S = e.onConnectEnd,
            z = e.onClickConnectStart,
            E = e.onClickConnectStop,
            O = e.onClickConnectEnd,
            F = e.onNodeMouseEnter,
            R = e.onNodeMouseMove,
            j = e.onNodeMouseLeave,
            x = e.onNodeContextMenu,
            C = e.onNodeDoubleClick,
            T = e.onNodeDragStart,
            W = e.onNodeDrag,
            P = e.onNodeDragStop,
            I = e.onNodesDelete,
            N = e.onEdgesDelete,
            D = e.onSelectionChange,
            U = e.onSelectionDragStart,
            k = e.onSelectionDrag,
            X = e.onSelectionDragStop,
            L = e.onSelectionContextMenu,
            q = e.connectionMode,
            Z = void 0 === q ? n.C.Strict : q,
            $ = e.connectionLineType,
            V = void 0 === $ ? n.q.Bezier : $,
            Y = e.connectionLineStyle,
            H = e.connectionLineComponent,
            G = e.connectionLineContainerStyle,
            K = e.deleteKeyCode,
            Q = void 0 === K ? "Backspace" : K,
            J = e.selectionKeyCode,
            ee = void 0 === J ? "Shift" : J,
            te = e.multiSelectionKeyCode,
            re = void 0 === te ? "Meta" : te,
            ne = e.zoomActivationKeyCode,
            ie = void 0 === ne ? "Meta" : ne,
            ae = e.snapToGrid,
            oe = void 0 !== ae && ae,
            se = e.snapGrid,
            le = void 0 === se ? pr : se,
            ce = e.onlyRenderVisibleElements,
            ue = void 0 !== ce && ce,
            de = e.selectNodesOnDrag,
            fe = void 0 === de || de,
            me = e.nodesDraggable,
            he = e.nodesConnectable,
            pe = e.elementsSelectable,
            ye = e.minZoom,
            ge = void 0 === ye ? 0.5 : ye,
            be = e.maxZoom,
            ve = void 0 === be ? 2 : be,
            Be = e.defaultZoom,
            we = void 0 === Be ? 1 : Be,
            _e = e.defaultPosition,
            Me = void 0 === _e ? yr : _e,
            Se = e.translateExtent,
            ze = void 0 === Se ? n.x : Se,
            Ee = e.preventScrolling,
            Oe = void 0 === Ee || Ee,
            Fe = e.nodeExtent,
            Re = e.defaultMarkerColor,
            je = void 0 === Re ? "#b1b1b7" : Re,
            xe = e.zoomOnScroll,
            Ce = void 0 === xe || xe,
            Te = e.zoomOnPinch,
            We = void 0 === Te || Te,
            Pe = e.panOnScroll,
            Ne = void 0 !== Pe && Pe,
            Ae = e.panOnScrollSpeed,
            De = void 0 === Ae ? 0.5 : Ae,
            ke = e.panOnScrollMode,
            Xe = void 0 === ke ? n.h.Free : ke,
            Le = e.zoomOnDoubleClick,
            qe = void 0 === Le || Le,
            Ze = e.panOnDrag,
            $e = void 0 === Ze || Ze,
            Ye = e.onPaneClick,
            He = e.onPaneScroll,
            Ge = e.onPaneContextMenu,
            Ke = e.children,
            Qe = e.onEdgeUpdate,
            Je = e.onEdgeContextMenu,
            et = e.onEdgeDoubleClick,
            tt = e.onEdgeMouseEnter,
            rt = e.onEdgeMouseMove,
            nt = e.onEdgeMouseLeave,
            it = e.onEdgeUpdateStart,
            at = e.onEdgeUpdateEnd,
            ot = e.edgeUpdaterRadius,
            st = void 0 === ot ? 10 : ot,
            lt = e.onNodesChange,
            ct = e.onEdgesChange,
            ut = e.noDragClassName,
            dt = void 0 === ut ? "nodrag" : ut,
            ft = e.noWheelClassName,
            mt = void 0 === ft ? "nowheel" : ft,
            ht = e.noPanClassName,
            pt = void 0 === ht ? "nopan" : ht,
            yt = e.fitView,
            gt = void 0 !== yt && yt,
            bt = e.fitViewOptions,
            vt = e.connectOnClick,
            Bt = void 0 === vt || vt,
            wt = e.attributionPosition,
            _t = e.proOptions,
            Mt = e.defaultEdgeOptions,
            St = e.elevateEdgesOnSelect,
            zt = void 0 !== St && St,
            Et = p(e, ur),
            Ot = sr(d, or),
            Ft = sr(m, Ve);
          return i.createElement(
            "div",
            fr(fr({}, Et), {}, { ref: t, className: a(["react-flow", c]) }),
            i.createElement(
              cr,
              null,
              i.createElement(Jt, {
                onInit: g,
                onMove: b,
                onMoveStart: v,
                onMoveEnd: B,
                onNodeClick: h,
                onEdgeClick: y,
                onNodeMouseEnter: F,
                onNodeMouseMove: R,
                onNodeMouseLeave: j,
                onNodeContextMenu: x,
                onNodeDoubleClick: C,
                nodeTypes: Ot,
                edgeTypes: Ft,
                connectionLineType: V,
                connectionLineStyle: Y,
                connectionLineComponent: H,
                connectionLineContainerStyle: G,
                selectionKeyCode: ee,
                deleteKeyCode: Q,
                multiSelectionKeyCode: re,
                zoomActivationKeyCode: ie,
                onlyRenderVisibleElements: ue,
                selectNodesOnDrag: fe,
                translateExtent: ze,
                minZoom: ge,
                maxZoom: ve,
                defaultZoom: we,
                defaultPosition: Me,
                preventScrolling: Oe,
                zoomOnScroll: Ce,
                zoomOnPinch: We,
                zoomOnDoubleClick: qe,
                panOnScroll: Ne,
                panOnScrollSpeed: De,
                panOnScrollMode: Xe,
                panOnDrag: $e,
                onPaneClick: Ye,
                onPaneScroll: He,
                onPaneContextMenu: Ge,
                onSelectionContextMenu: L,
                onEdgeUpdate: Qe,
                onEdgeContextMenu: Je,
                onEdgeDoubleClick: et,
                onEdgeMouseEnter: tt,
                onEdgeMouseMove: rt,
                onEdgeMouseLeave: nt,
                onEdgeUpdateStart: it,
                onEdgeUpdateEnd: at,
                edgeUpdaterRadius: st,
                defaultMarkerColor: je,
                noDragClassName: dt,
                noWheelClassName: mt,
                noPanClassName: pt,
                elevateEdgesOnSelect: zt,
                id: null == Et ? void 0 : Et.id,
              }),
              i.createElement(Ue, {
                nodes: r,
                edges: o,
                defaultNodes: s,
                defaultEdges: l,
                onConnect: w,
                onConnectStart: _,
                onConnectStop: M,
                onConnectEnd: S,
                onClickConnectStart: z,
                onClickConnectStop: E,
                onClickConnectEnd: O,
                nodesDraggable: me,
                nodesConnectable: he,
                elementsSelectable: pe,
                minZoom: ge,
                maxZoom: ve,
                nodeExtent: Fe,
                onNodesChange: lt,
                onEdgesChange: ct,
                snapToGrid: oe,
                snapGrid: le,
                connectionMode: Z,
                translateExtent: ze,
                connectOnClick: Bt,
                defaultEdgeOptions: Mt,
                fitView: gt,
                fitViewOptions: bt,
                onNodesDelete: I,
                onEdgesDelete: N,
                onNodeDragStart: T,
                onNodeDrag: W,
                onNodeDragStop: P,
                onSelectionDrag: k,
                onSelectionDragStart: U,
                onSelectionDragStop: X,
              }),
              D && i.createElement(Ie, { onSelectionChange: D }),
              Ke,
              i.createElement(A, { proOptions: _t, position: wt }),
            ),
          );
        });
      gr.displayName = "ReactFlow";
      var br = function (e) {
        var t = e.children;
        return i.createElement(n.v, { createStore: n.w }, t);
      };
      function vr(e) {
        return function (t) {
          var r = (0, i.useState)(t),
            a = (0, n._)(r, 2),
            o = a[0],
            s = a[1],
            l = (0, i.useCallback)(function (t) {
              return s(function (r) {
                return e(t, r);
              });
            }, []);
          return [o, s, l];
        };
      }
      br.displayName = "ReactFlowProvider";
      var Br = vr(n.y),
        wr = vr(n.z);
    },
    77826: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => o });
      var n = r(47427),
        i = r(39234),
        a =
          (r(96295),
          function (e) {
            return e.updateNodeDimensions;
          });
      function o() {
        var e = (0, i.u)(),
          t = (0, i.b)(a);
        return (0, n.useCallback)(function (r) {
          var n,
            i =
              null === (n = e.getState().domNode) || void 0 === n
                ? void 0
                : n.querySelector(
                    '.react-flow__node[data-id="'.concat(r, '"]'),
                  );
          i &&
            requestAnimationFrame(function () {
              return t([{ id: r, nodeElement: i, forceUpdate: !0 }]);
            });
        }, []);
      }
    },
    53664: (e, t, r) => {
      "use strict";
      r.d(t, { w: () => l });
      var n = r(6256),
        i = r(52942),
        a = r(90291),
        o = r(56886),
        s = r(52871),
        l = (0, n.z)({
          chartName: "LineChart",
          GraphicalChild: i.x,
          axisComponents: [
            { axisType: "xAxis", AxisComp: a.K },
            { axisType: "yAxis", AxisComp: o.B },
          ],
          formatAxisMap: s.t9,
        });
    },
    45681: (e, t, r) => {
      "use strict";
      r.d(t, {
        $G: () => Ce,
        DY: () => _e,
        FB: () => je,
        NG: () => bt,
        Oz: () => Ee,
        S$: () => Fe,
        Sj: () => He,
        UY: () => j,
        VO: () => Qe,
        Vy: () => Se,
        W3: () => Be,
        Y0: () => h,
        _u: () => R,
        cJ: () => ut,
        dq: () => Ke,
        kK: () => Xe,
        mg: () => p,
        uK: () => Ze,
        wN: () => Ie,
        yu: () => Ae,
        zu: () => be,
      });
      var n = r(10059),
        i = r(39087),
        a = r(79545);
      const o = n.Message;
      class s extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            s.prototype.elements || i.aR(s.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: { elements: { n: 1, c: l, r: !0, q: !0 } },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = i.Bh(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(s.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(s.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new s();
          return s.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnDataSourceDescObject";
        }
      }
      class l extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.name || i.aR(l.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  name: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                  data_type: { n: 2, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  object: { n: 3, c: s },
                  count: { n: 4, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = i.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnDataSourceDescElement";
        }
      }
      class c extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.id || i.aR(c.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  id: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  name: { n: 2, br: i.FE.readString, bw: i.Xc.writeString },
                  version: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  source_description: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  structure: { n: 5, c: s },
                  structure_crc: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  cache_duration_seconds: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnDataSource";
        }
      }
      class u extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.elements || i.aR(u.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { elements: { n: 1, c: d, r: !0, q: !0 } },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = i.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnDataObject";
        }
      }
      class d extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.name || i.aR(d.M()),
            o.initialize(this, e, 0, -1, [20, 21, 22, 23, 24], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  name: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                  data_int32s: {
                    n: 20,
                    r: !0,
                    q: !0,
                    br: i.FE.readInt32,
                    pbr: i.FE.readPackedInt32,
                    bw: i.Xc.writeRepeatedInt32,
                  },
                  data_floats: {
                    n: 21,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  data_bools: {
                    n: 22,
                    r: !0,
                    q: !0,
                    br: i.FE.readBool,
                    pbr: i.FE.readPackedBool,
                    bw: i.Xc.writeRepeatedBool,
                  },
                  data_strings: {
                    n: 23,
                    r: !0,
                    q: !0,
                    br: i.FE.readString,
                    bw: i.Xc.writeRepeatedString,
                  },
                  data_objects: { n: 24, c: u, r: !0, q: !0 },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = i.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnDataElement";
        }
      }
      class f extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.data_source_id || i.aR(f.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  data_source_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  keys: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint64String,
                    pbr: i.FE.readPackedUint64String,
                    bw: i.Xc.writeRepeatedUint64String,
                  },
                  data_object: { n: 3, c: u },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = i.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnData";
        }
      }
      class m extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.data || i.aR(m.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: { data: { n: 1, c: f, r: !0, q: !0 } },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = i.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnDataList";
        }
      }
      class h extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.data_source_id || i.aR(h.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  data_source_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  data_element_path: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  is_string: { n: 3, br: i.FE.readBool, bw: i.Xc.writeBool },
                  input: { n: 4, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  sql_column: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  preprocessing_type: {
                    n: 6,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  min_range: { n: 7, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  max_range: { n: 8, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  std_dev: { n: 9, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  compact_table: {
                    n: 10,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  compact_table_count: {
                    n: 11,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = i.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnDataSourceElementUsage";
        }
      }
      class p extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.project_id || i.aR(p.M()),
            o.initialize(this, e, 0, -1, [7], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  project_name: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  project_description: {
                    n: 3,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  creator_account_id: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  create_time: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  unpublished_config: { n: 6, c: b },
                  published_configs: { n: 7, c: b, r: !0, q: !0 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = i.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProject";
        }
      }
      class y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.fetch_id || i.aR(y.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  fetch_id: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = i.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnFetchInfo";
        }
      }
      class g extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.fetch_id || i.aR(g.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  fetch_id: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  train_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  scheduled_train: {
                    n: 3,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  auto_snapshot_pending: {
                    n: 4,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = i.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnTrainInfo";
        }
      }
      class b extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.project_id || i.aR(b.M()),
            o.initialize(this, e, 0, -1, [4, 5, 6, 17, 18, 12], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  publish_time: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  data_source_ids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint32,
                    pbr: i.FE.readPackedUint32,
                    bw: i.Xc.writeRepeatedUint32,
                  },
                  data_source_element_usages: { n: 5, c: h, r: !0, q: !0 },
                  project_nodes: { n: 6, c: R, r: !0, q: !0 },
                  snapshot_filter: { n: 11, c: w },
                  snapshot_config: { n: 7, c: _ },
                  train_config: { n: 8, c: E },
                  scheduled_train_config: { n: 16, c: O },
                  data_retention_config: { n: 14, c: F },
                  fetch_infos: { n: 17, c: y, r: !0, q: !0 },
                  train_infos: { n: 18, c: g, r: !0, q: !0 },
                  map_data_element_sql_column: { n: 12, c: v, r: !0, q: !0 },
                  total_sql_columns: {
                    n: 13,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = i.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectConfig";
        }
      }
      class v extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.key || i.aR(v.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  key: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                  value: { n: 2, br: i.FE.readInt32, bw: i.Xc.writeInt32 },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = i.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectConfig_MapDataElementSqlColumnEntry";
        }
      }
      class B extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.data_element_path || i.aR(B.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  data_element_path: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  min_value: { n: 2, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  max_value: { n: 3, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  num_buckets: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = i.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectSnapshotFilterHistogram";
        }
      }
      class w extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.sample_reduce_percent || i.aR(w.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  sample_reduce_percent: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  histogram: { n: 2, c: B },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = i.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectSnapshotFilter";
        }
      }
      class _ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.snapshot_type || i.aR(_.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  snapshot_type: {
                    n: 1,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  snapshot_schedule_type: {
                    n: 5,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  snapshot_schedule_day_of_week: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  snapshot_schedule_day_of_month: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  config_account_ids: { n: 2, c: M },
                  config_app_ids: { n: 3, c: S },
                  config_other_project: { n: 4, c: z },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = i.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectSnapshotConfig";
        }
      }
      class M extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.percent || i.aR(M.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  percent: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  activity_recency_days: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = i.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectSnapshotConfigAccountIDs";
        }
      }
      class S extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.percent || i.aR(S.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  percent: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  release_recency_days: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = i.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectSnapshotConfigAppIDs";
        }
      }
      class z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.project_id || i.aR(z.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = i.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectSnapshotConfigOtherProject";
        }
      }
      class E extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.fetch_workers || i.aR(E.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  fetch_workers: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_chunk_size: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_batch_size: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_epoch_count: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_loss_improvement_threshold: {
                    n: 5,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                  train_no_loss_improvement_epoch_limit: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_optimizer: {
                    n: 7,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  train_learning_rate: {
                    n: 8,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = i.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnTrainConfig";
        }
      }
      class O extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.scheduled_type || i.aR(O.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  scheduled_type: {
                    n: 1,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  scheduled_minute: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  scheduled_hour: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  scheduled_day_of_week: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  scheduled_day_of_month: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  auto_activate_accuracy_threshold: {
                    n: 6,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = i.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnScheduledTrainConfig";
        }
      }
      class F extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.snapshot_keep_duration_days || i.aR(F.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  snapshot_keep_duration_days: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_keep_count: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = i.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnDataRetentionConfig";
        }
      }
      class R extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.node_id || i.aR(R.M()),
            o.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  node_id: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  location_x: { n: 2, br: i.FE.readInt32, bw: i.Xc.writeInt32 },
                  location_y: { n: 3, br: i.FE.readInt32, bw: i.Xc.writeInt32 },
                  comment: { n: 4, br: i.FE.readString, bw: i.Xc.writeString },
                  type: { n: 5, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  connectors: { n: 6, c: j, r: !0, q: !0 },
                  input: { n: 10, c: x },
                  dense: { n: 11, c: C },
                  dense_stack: { n: 12, c: T },
                  dropout: { n: 13, c: W },
                  embedding: { n: 14, c: P },
                  train: { n: 15, c: I },
                  conditional_extract: { n: 16, c: N },
                  concatenate: { n: 17, c: U },
                  shuffle: { n: 18, c: X },
                  synced_shuffle: { n: 19, c: L },
                  onehot: { n: 20, c: q },
                  explode: { n: 21, c: Z },
                  conditional_swap: { n: 22, c: $ },
                  kmeans: { n: 23, c: V },
                  combine: { n: 24, c: k },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = i.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectNode";
        }
      }
      class j extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.connector_id || i.aR(j.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  connector_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  linked_connector_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint32,
                    pbr: i.FE.readPackedUint32,
                    bw: i.Xc.writeRepeatedUint32,
                  },
                  is_input_connector: {
                    n: 3,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = i.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnProjectNodeConnector";
        }
      }
      class x extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.input_num || i.aR(x.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  input_num: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = i.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeInput";
        }
      }
      class C extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.activation || i.aR(C.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  activation: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  width: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = i.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeDense";
        }
      }
      class T extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.activation || i.aR(T.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  activation: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  width: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint32,
                    pbr: i.FE.readPackedUint32,
                    bw: i.Xc.writeRepeatedUint32,
                  },
                  dropout_pct: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = i.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeDenseStack";
        }
      }
      class W extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.dropout_pct || i.aR(W.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  dropout_pct: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = i.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeDropout";
        }
      }
      class P extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.max_value || i.aR(P.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  max_value: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  compact_table: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  embedding_width: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  flatten: { n: 4, br: i.FE.readBool, bw: i.Xc.writeBool },
                  export_name: {
                    n: 5,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = i.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(P.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeEmbedding";
        }
      }
      class I extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.input_count || i.aR(I.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  input_count: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  activation: { n: 2, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  width: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  compact_table: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  loss: { n: 6, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  learning_rate: {
                    n: 7,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = i.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeTrain";
        }
      }
      class N extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.extract_filter_type || i.aR(N.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  extract_filter_type: {
                    n: 10,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  extract_weight_type: {
                    n: 11,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  filter_info: { n: 12, c: A },
                  weight_info: { n: 13, c: D },
                  compact_table: {
                    n: 14,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  extracted_compact_table: {
                    n: 15,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = i.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeConditionalExtract";
        }
      }
      class A extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.appid_release_recency_months || i.aR(A.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  appid_release_recency_months: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  appid_publisher_id: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  appid_featured_tag_id: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  appid_theme_tag_id: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = i.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(A.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeConditionalExtract_FilterInfo";
        }
      }
      class D extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.appid_release_recency_bias || i.aR(D.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  appid_release_recency_bias: {
                    n: 1,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                  input_number: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  input_strength: {
                    n: 3,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = i.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeConditionalExtract_WeightInfo";
        }
      }
      class U extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new U();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeConcatenate";
        }
      }
      class k extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeCombine";
        }
      }
      class X extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.exclude_zeroes || i.aR(X.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  exclude_zeroes: {
                    n: 1,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = i.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeShuffle";
        }
      }
      class L extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.exclude_zeroes || i.aR(L.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  exclude_zeroes: {
                    n: 1,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = i.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(L.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeSyncedShuffle";
        }
      }
      class q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.width || i.aR(q.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  width: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  compact_table: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = i.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(q.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeOnehot";
        }
      }
      class Z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Z();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeExplode";
        }
      }
      class $ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new $();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeConditionalSwap";
        }
      }
      class V extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.num_clusters || i.aR(V.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  num_clusters: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  name: { n: 2, br: i.FE.readString, bw: i.Xc.writeString },
                  generate_clusters: {
                    n: 3,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = i.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(V.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnModelNodeKMeansCluster";
        }
      }
      class Y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.access_token || i.aR(Y.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  access_token: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  data_source: { n: 3, c },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = i.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Y.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_RegisterDataSource_Request";
        }
      }
      class H extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.result || i.aR(H.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  data_source: { n: 2, c },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = i.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(H.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_RegisterDataSource_Response";
        }
      }
      class G extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.access_token || i.aR(G.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  access_token: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  data: { n: 3, c: f },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = i.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_CacheData_Request";
        }
      }
      class K extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.cache_data_result || i.aR(K.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  cache_data_result: {
                    n: 1,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = i.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(K.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_CacheData_Response";
        }
      }
      class Q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.access_token || i.aR(Q.M()),
            o.initialize(this, e, 0, -1, [4, 5], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  access_token: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  project_id: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  keys: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint64String,
                    pbr: i.FE.readPackedUint64String,
                    bw: i.Xc.writeRepeatedUint64String,
                  },
                  data: { n: 5, c: f, r: !0, q: !0 },
                  pending_data_limit_seconds: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = i.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Q.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_SnapshotProject_Request";
        }
      }
      class J extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.snapshot_result || i.aR(J.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  snapshot_result: {
                    n: 1,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = i.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(J.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_SnapshotProject_Response";
        }
      }
      class ee extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.access_token || i.aR(ee.M()),
            o.initialize(this, e, 0, -1, [7, 8], null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  access_token: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  project_id: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  override_train_id: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  data: { n: 6, c: m },
                  additional_data: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  keys: {
                    n: 8,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint64String,
                    pbr: i.FE.readPackedUint64String,
                    bw: i.Xc.writeRepeatedUint64String,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = i.Bh(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ee.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_Inference_Request";
        }
      }
      class te extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.inference_result || i.aR(te.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  inference_result: {
                    n: 1,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  backend_response: { n: 2, c: Je },
                  keys: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint64String,
                    pbr: i.FE.readPackedUint64String,
                    bw: i.Xc.writeRepeatedUint64String,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = i.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(te.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_Inference_Response";
        }
      }
      class re extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.access_token || i.aR(re.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  access_token: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  project_id: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  override_train_id: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = i.Bh(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(re.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Request";
        }
      }
      class ne extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.inference_metadata_result || i.aR(ne.M()),
            o.initialize(this, e, 0, -1, [3, 4, 5, 6, 8], null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  inference_metadata_result: {
                    n: 1,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  row_range: { n: 2, c: ie },
                  ranges: { n: 3, c: ae, r: !0, q: !0 },
                  std_devs: { n: 4, c: oe, r: !0, q: !0 },
                  compact_tables: { n: 5, c: se, r: !0, q: !0 },
                  kmeans: { n: 6, c: de, r: !0, q: !0 },
                  app_info: { n: 8, c: pe, r: !0, q: !0 },
                  snapshot_histogram: { n: 7, c: me },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = i.Bh(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ne.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response";
        }
      }
      class ie extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.min_row || i.aR(ie.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  min_row: {
                    n: 1,
                    br: i.FE.readUint64String,
                    bw: i.Xc.writeUint64String,
                  },
                  max_row: {
                    n: 2,
                    br: i.FE.readUint64String,
                    bw: i.Xc.writeUint64String,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = i.Bh(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ie.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_RowRange";
        }
      }
      class ae extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.data_element_path || i.aR(ae.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  data_element_path: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  min_value: { n: 2, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  max_value: { n: 3, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = i.Bh(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ae.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_Range";
        }
      }
      class oe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.data_element_path || i.aR(oe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  data_element_path: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  mean: { n: 2, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  std_dev: { n: 3, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = i.Bh(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(oe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_StdDev";
        }
      }
      class se extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.name || i.aR(se.M()),
            o.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  name: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                  map_values: { n: 2, c: ce, r: !0, q: !0 },
                  map_mappings: { n: 3, c: ue, r: !0, q: !0 },
                  total_count: {
                    n: 4,
                    br: i.FE.readUint64String,
                    bw: i.Xc.writeUint64String,
                  },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = i.Bh(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(se.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_CompactTable";
        }
      }
      class le extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.value || i.aR(le.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  value: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  mapping: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  count: {
                    n: 3,
                    br: i.FE.readUint64String,
                    bw: i.Xc.writeUint64String,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = i.Bh(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(le.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_CompactTable_Entry";
        }
      }
      class ce extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.key || i.aR(ce.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  key: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  value: { n: 2, c: le },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = i.Bh(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ce.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_CompactTable_MapValuesEntry";
        }
      }
      class ue extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.key || i.aR(ue.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  key: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  value: { n: 2, c: le },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = i.Bh(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ue.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_CompactTable_MapMappingsEntry";
        }
      }
      class de extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.name || i.aR(de.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  name: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                  clusters: { n: 2, c: fe, r: !0, q: !0 },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = i.Bh(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(de.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_KMeans";
        }
      }
      class fe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.x || i.aR(fe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  x: { n: 1, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  y: { n: 2, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  radius: { n: 3, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  radius_75pct: {
                    n: 4,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                  radius_50pct: {
                    n: 5,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                  radius_25pct: {
                    n: 6,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = i.Bh(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(fe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_KMeans_Cluster";
        }
      }
      class me extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.min_value || i.aR(me.M()),
            o.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  min_value: { n: 1, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  max_value: { n: 2, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  num_buckets: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  bucket_counts: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint32,
                    pbr: i.FE.readPackedUint32,
                    bw: i.Xc.writeRepeatedUint32,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = i.Bh(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(me.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_SnapshotHistogram";
        }
      }
      class he extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.country_allow || i.aR(he.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  country_allow: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  country_deny: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  platform_win: { n: 3, br: i.FE.readBool, bw: i.Xc.writeBool },
                  platform_mac: { n: 4, br: i.FE.readBool, bw: i.Xc.writeBool },
                  platform_linux: {
                    n: 5,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  adult_violence: {
                    n: 6,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  adult_sex: { n: 7, br: i.FE.readBool, bw: i.Xc.writeBool },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = i.Bh(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(he.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_AppInfo";
        }
      }
      class pe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.key || i.aR(pe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  key: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  value: { n: 2, c: he },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = i.Bh(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(pe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceMetadata_Response_AppInfoEntry";
        }
      }
      class ye extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.cache_data_requests || i.aR(ye.M()),
            o.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  cache_data_requests: { n: 1, c: G, r: !0, q: !0 },
                  snapshot_requests: { n: 2, c: Q, r: !0, q: !0 },
                  inference_requests: { n: 3, c: ee, r: !0, q: !0 },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = i.Bh(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ye.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_BatchOperation_Request";
        }
      }
      class ge extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.cache_data_responses || i.aR(ge.M()),
            o.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  cache_data_responses: { n: 1, c: K, r: !0, q: !0 },
                  snapshot_responses: { n: 2, c: J, r: !0, q: !0 },
                  inference_responses: { n: 3, c: te, r: !0, q: !0 },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = i.Bh(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ge.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_BatchOperation_Response";
        }
      }
      class be extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.project_name || i.aR(be.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  project_name: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  project_description: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = i.Bh(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(be.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_CreateProject_Request";
        }
      }
      class ve extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.result || i.aR(ve.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  project: { n: 2, c: p },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = i.Bh(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ve.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_CreateProject_Response";
        }
      }
      class Be extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.appid || i.aR(Be.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  appid: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = i.Bh(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Be.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_ListProjects_Request";
        }
      }
      class we extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.projects || i.aR(we.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: { projects: { n: 1, c: p, r: !0, q: !0 } },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = i.Bh(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(we.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_ListProjects_Response";
        }
      }
      class _e extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.project_id || i.aR(_e.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = i.Bh(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(_e.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetProject_Request";
        }
      }
      class Me extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.project || i.aR(Me.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = { proto: Me, fields: { project: { n: 1, c: p } } }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = i.Bh(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Me.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetProject_Response";
        }
      }
      class Se extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Se();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_ListDataSources_Request";
        }
      }
      class ze extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.data_sources || i.aR(ze.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: { data_sources: { n: 1, c, r: !0, q: !0 } },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = i.Bh(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ze.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_ListDataSources_Response";
        }
      }
      class Ee extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.data_source_id || i.aR(Ee.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  data_source_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = i.Bh(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ee.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetDataSource_Request";
        }
      }
      class Oe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.data_source || i.aR(Oe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = { proto: Oe, fields: { data_source: { n: 1, c } } }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = i.Bh(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Oe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetDataSource_Response";
        }
      }
      class Fe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.project || i.aR(Fe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  project: { n: 1, c: p },
                  published_version: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = i.Bh(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Fe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_EditProject_Request";
        }
      }
      class Re extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.result || i.aR(Re.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = i.Bh(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Re.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_EditProject_Response";
        }
      }
      class je extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.project_id || i.aR(je.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = i.Bh(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(je.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_PublishProject_Request";
        }
      }
      class xe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.result || i.aR(xe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = i.Bh(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(xe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_PublishProject_Response";
        }
      }
      class Ce extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.project_config || i.aR(Ce.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  project_config: { n: 1, c: b },
                  fetch: { n: 2, c: Te },
                  train: { n: 3, c: We },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = i.Bh(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ce.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_Train_Request";
        }
      }
      class Te extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.fetch_id || i.aR(Te.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  fetch_id: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  request_cancel: {
                    n: 2,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = i.Bh(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Te.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_Train_Request_Fetch";
        }
      }
      class We extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.train_id || i.aR(We.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  train_id: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  request_cancel: {
                    n: 2,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  scheduled_train: {
                    n: 3,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = i.Bh(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(We.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_Train_Request_Train";
        }
      }
      class Pe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.result || i.aR(Pe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = i.Bh(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Pe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_Train_Response";
        }
      }
      class Ie extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.project_id || i.aR(Ie.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = i.Bh(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ie.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetFetchStatusVersions_Request";
        }
      }
      class Ne extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.versions || i.aR(Ne.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  versions: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint32,
                    pbr: i.FE.readPackedUint32,
                    bw: i.Xc.writeRepeatedUint32,
                  },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = i.Bh(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ne.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetFetchStatusVersions_Response";
        }
      }
      class Ae extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.project_id || i.aR(Ae.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = i.Bh(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ae.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetTrainStatusVersions_Request";
        }
      }
      class De extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.versions || i.aR(De.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  versions: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint32,
                    pbr: i.FE.readPackedUint32,
                    bw: i.Xc.writeRepeatedUint32,
                  },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = i.Bh(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(De.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetTrainStatusVersions_Response";
        }
      }
      class Ue extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.fetch_requests || i.aR(Ue.M()),
            o.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  fetch_requests: { n: 1, c: Xe, r: !0, q: !0 },
                  train_requests: { n: 2, c: Ze, r: !0, q: !0 },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = i.Bh(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ue.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetBatchedStatus_Request";
        }
      }
      class ke extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.result || i.aR(ke.M()),
            o.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  fetch_responses: { n: 2, c: Le, r: !0, q: !0 },
                  train_responses: { n: 3, c: $e, r: !0, q: !0 },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = i.Bh(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ke.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetBatchedStatus_Response";
        }
      }
      class Xe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xe.prototype.project_id || i.aR(Xe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = i.Bh(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Xe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Xe();
          return Xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetFetchStatus_Request";
        }
      }
      class Le extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.result || i.aR(Le.M()),
            o.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  project_id: {
                    n: 11,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  status: { n: 3, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  workers: { n: 4, c: qe, r: !0, q: !0 },
                  total_rows_written: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  total_rows_processed: {
                    n: 9,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  total_rows: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  start_time: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  end_time: { n: 8, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  error_string: {
                    n: 10,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = i.Bh(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Le.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Le();
          return Le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Le.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetFetchStatus_Response";
        }
      }
      class qe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.rows_written || i.aR(qe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  rows_written: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  rows_processed: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  complete: { n: 2, br: i.FE.readBool, bw: i.Xc.writeBool },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = i.Bh(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(qe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetFetchStatus_Response_Worker";
        }
      }
      class Ze extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ze.prototype.project_id || i.aR(Ze.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ze.sm_m ||
              (Ze.sm_m = {
                proto: Ze,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            Ze.sm_m
          );
        }
        static MBF() {
          return Ze.sm_mbf || (Ze.sm_mbf = i.Bh(Ze.M())), Ze.sm_mbf;
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ze.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ze();
          return Ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetTrainStatus_Request";
        }
      }
      class $e extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $e.prototype.result || i.aR($e.M()),
            o.initialize(this, e, 0, -1, [5, 10, 12], null);
        }
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  project_id: {
                    n: 18,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  fetch_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  status: { n: 4, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  epochs: { n: 5, c: Ye, r: !0, q: !0 },
                  total_epochs: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_batch_count: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  validate_batch_count: {
                    n: 8,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  test_batch_count: {
                    n: 9,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  test_batches: { n: 10, c: Ve, r: !0, q: !0 },
                  test_loss: { n: 11, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  test_accuracy: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  start_time: {
                    n: 13,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  end_time: {
                    n: 14,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  scheduled_train: {
                    n: 15,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  live: { n: 16, br: i.FE.readBool, bw: i.Xc.writeBool },
                  active: { n: 17, br: i.FE.readBool, bw: i.Xc.writeBool },
                },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = i.Bh($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA($e.M(), e, t);
        }
        static fromObject(e) {
          return i.aD($e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new $e();
          return $e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F($e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2($e.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetTrainStatus_Response";
        }
      }
      class Ve extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ve.prototype.loss || i.aR(Ve.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: {
                  loss: { n: 1, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  accuracy: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = i.Bh(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ve.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ve();
          return Ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetTrainStatus_Response_Batch";
        }
      }
      class Ye extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ye.prototype.epoch_number || i.aR(Ye.M()),
            o.initialize(this, e, 0, -1, [3, 5, 6, 7], null);
        }
        static M() {
          return (
            Ye.sm_m ||
              (Ye.sm_m = {
                proto: Ye,
                fields: {
                  epoch_number: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  epoch_train_loss: {
                    n: 2,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                  epoch_train_accuracy: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  epoch_validate_loss: {
                    n: 4,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                  epoch_validate_accuracy: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  train_batches: { n: 6, c: Ve, r: !0, q: !0 },
                  validate_batches: { n: 7, c: Ve, r: !0, q: !0 },
                  start_time: {
                    n: 8,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  end_time: { n: 9, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            Ye.sm_m
          );
        }
        static MBF() {
          return Ye.sm_mbf || (Ye.sm_mbf = i.Bh(Ye.M())), Ye.sm_mbf;
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ye.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ye();
          return Ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetTrainStatus_Response_Epoch";
        }
      }
      class He extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.project_id || i.aR(He.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  from_scheduled: {
                    n: 4,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  deactivate: { n: 5, br: i.FE.readBool, bw: i.Xc.writeBool },
                },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = i.Bh(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(He.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(He.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new He();
          return He.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(He.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(He.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_SetTrainLive_Request";
        }
      }
      class Ge extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.result || i.aR(Ge.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = i.Bh(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ge.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_SetTrainLive_Response";
        }
      }
      class Ke extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ke.prototype.float_value || i.aR(Ke.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: {
                  float_value: {
                    n: 1,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                  string_value: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = i.Bh(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Ke.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Ke();
          return Ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearnRawDataElement";
        }
      }
      class Qe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qe.prototype.project_id || i.aR(Qe.M()),
            o.initialize(this, e, 0, -1, [4, 7, 6], null);
        }
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  train_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  data: { n: 4, c: Ke, r: !0, q: !0 },
                  additional_data: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  keys: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint64String,
                    pbr: i.FE.readPackedUint64String,
                    bw: i.Xc.writeRepeatedUint64String,
                  },
                },
              }),
            Qe.sm_m
          );
        }
        static MBF() {
          return Qe.sm_mbf || (Qe.sm_mbf = i.Bh(Qe.M())), Qe.sm_mbf;
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Qe.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Qe();
          return Qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceBackend_Request";
        }
      }
      class Je extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Je.prototype.outputs || i.aR(Je.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Je.sm_m ||
              (Je.sm_m = {
                proto: Je,
                fields: { outputs: { n: 1, c: it, r: !0, q: !0 } },
              }),
            Je.sm_m
          );
        }
        static MBF() {
          return Je.sm_mbf || (Je.sm_mbf = i.Bh(Je.M())), Je.sm_mbf;
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(Je.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(Je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new Je();
          return Je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(Je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(Je.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceBackend_Response";
        }
      }
      class et extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            et.prototype.value || i.aR(et.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            et.sm_m ||
              (et.sm_m = {
                proto: et,
                fields: {
                  value: { n: 1, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                },
              }),
            et.sm_m
          );
        }
        static MBF() {
          return et.sm_mbf || (et.sm_mbf = i.Bh(et.M())), et.sm_mbf;
        }
        toObject(e = !1) {
          return et.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(et.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new et();
          return et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(et.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceBackend_Response_RegressionOutput";
        }
      }
      class tt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            tt.prototype.value || i.aR(tt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            tt.sm_m ||
              (tt.sm_m = {
                proto: tt,
                fields: {
                  value: { n: 1, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                },
              }),
            tt.sm_m
          );
        }
        static MBF() {
          return tt.sm_mbf || (tt.sm_mbf = i.Bh(tt.M())), tt.sm_mbf;
        }
        toObject(e = !1) {
          return tt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(tt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new tt();
          return tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceBackend_Response_BinaryCrossEntropyOutput";
        }
      }
      class rt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            rt.prototype.weight || i.aR(rt.M()),
            o.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            rt.sm_m ||
              (rt.sm_m = {
                proto: rt,
                fields: {
                  weight: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  value: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                },
              }),
            rt.sm_m
          );
        }
        static MBF() {
          return rt.sm_mbf || (rt.sm_mbf = i.Bh(rt.M())), rt.sm_mbf;
        }
        toObject(e = !1) {
          return rt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(rt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new rt();
          return rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceBackend_Response_MutliBinaryCrossEntropyOutput";
        }
      }
      class nt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            nt.prototype.weight || i.aR(nt.M()),
            o.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            nt.sm_m ||
              (nt.sm_m = {
                proto: nt,
                fields: {
                  weight: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  value: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                },
              }),
            nt.sm_m
          );
        }
        static MBF() {
          return nt.sm_mbf || (nt.sm_mbf = i.Bh(nt.M())), nt.sm_mbf;
        }
        toObject(e = !1) {
          return nt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(nt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(nt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new nt();
          return nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceBackend_Response_CategoricalCrossEntropyOutput";
        }
      }
      class it extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            it.prototype.binary_crossentropy || i.aR(it.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            it.sm_m ||
              (it.sm_m = {
                proto: it,
                fields: {
                  binary_crossentropy: { n: 1, c: tt },
                  categorical_crossentropy: { n: 2, c: nt },
                  multi_binary_crossentropy: { n: 3, c: rt },
                  regression: { n: 4, c: et },
                },
              }),
            it.sm_m
          );
        }
        static MBF() {
          return it.sm_mbf || (it.sm_mbf = i.Bh(it.M())), it.sm_mbf;
        }
        toObject(e = !1) {
          return it.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(it.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(it.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new it();
          return it.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(it.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(it.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return it.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_InferenceBackend_Response_Output";
        }
      }
      class at extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            at.prototype.project_id || i.aR(at.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            at.sm_m ||
              (at.sm_m = {
                proto: at,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  train_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            at.sm_m
          );
        }
        static MBF() {
          return at.sm_mbf || (at.sm_mbf = i.Bh(at.M())), at.sm_mbf;
        }
        toObject(e = !1) {
          return at.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(at.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(at.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new at();
          return at.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(at.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(at.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return at.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_LogEvent_TrainStarted";
        }
      }
      class ot extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ot.prototype.project_id || i.aR(ot.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ot.sm_m ||
              (ot.sm_m = {
                proto: ot,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  train_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  loss: { n: 4, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  accuracy: { n: 5, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                },
              }),
            ot.sm_m
          );
        }
        static MBF() {
          return ot.sm_mbf || (ot.sm_mbf = i.Bh(ot.M())), ot.sm_mbf;
        }
        toObject(e = !1) {
          return ot.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ot.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ot.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ot();
          return ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ot.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ot.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_LogEvent_TrainEnded";
        }
      }
      class st extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            st.prototype.project_id || i.aR(st.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            st.sm_m ||
              (st.sm_m = {
                proto: st,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  train_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  manual_set_live: {
                    n: 4,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  accuracy_difference: {
                    n: 5,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                  accuracy_threshold: {
                    n: 6,
                    br: i.FE.readFloat,
                    bw: i.Xc.writeFloat,
                  },
                },
              }),
            st.sm_m
          );
        }
        static MBF() {
          return st.sm_mbf || (st.sm_mbf = i.Bh(st.M())), st.sm_mbf;
        }
        toObject(e = !1) {
          return st.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(st.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(st.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new st();
          return st.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(st.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(st.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return st.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_LogEvent_TrainSetLive";
        }
      }
      class lt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            lt.prototype.project_id || i.aR(lt.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            lt.sm_m ||
              (lt.sm_m = {
                proto: lt,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  fetch_id: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  train_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            lt.sm_m
          );
        }
        static MBF() {
          return lt.sm_mbf || (lt.sm_mbf = i.Bh(lt.M())), lt.sm_mbf;
        }
        toObject(e = !1) {
          return lt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(lt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(lt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new lt();
          return lt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(lt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(lt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return lt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_LogEvent_ScheduledTrain";
        }
      }
      class ct extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ct.prototype.event_type || i.aR(ct.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ct.sm_m ||
              (ct.sm_m = {
                proto: ct,
                fields: {
                  event_type: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  timestamp: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_started: { n: 3, c: at },
                  train_ended: { n: 4, c: ot },
                  train_set_live: { n: 5, c: st },
                  scheduled_train: { n: 6, c: lt },
                },
              }),
            ct.sm_m
          );
        }
        static MBF() {
          return ct.sm_mbf || (ct.sm_mbf = i.Bh(ct.M())), ct.sm_mbf;
        }
        toObject(e = !1) {
          return ct.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ct.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ct.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ct();
          return ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_LogEvent";
        }
      }
      class ut extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ut.prototype.start_timestamp || i.aR(ut.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ut.sm_m ||
              (ut.sm_m = {
                proto: ut,
                fields: {
                  start_timestamp: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  end_timestamp: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            ut.sm_m
          );
        }
        static MBF() {
          return ut.sm_mbf || (ut.sm_mbf = i.Bh(ut.M())), ut.sm_mbf;
        }
        toObject(e = !1) {
          return ut.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ut.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ut.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ut();
          return ut.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ut.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ut.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetLogEvents_Request";
        }
      }
      class dt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            dt.prototype.result || i.aR(dt.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            dt.sm_m ||
              (dt.sm_m = {
                proto: dt,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  event_list: { n: 2, c: ct, r: !0, q: !0 },
                },
              }),
            dt.sm_m
          );
        }
        static MBF() {
          return dt.sm_mbf || (dt.sm_mbf = i.Bh(dt.M())), dt.sm_mbf;
        }
        toObject(e = !1) {
          return dt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(dt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(dt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new dt();
          return dt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(dt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(dt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return dt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetLogEvents_Response";
        }
      }
      class ft extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ft.prototype.project_id || i.aR(ft.M()),
            o.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            ft.sm_m ||
              (ft.sm_m = {
                proto: ft,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  fetch_id: { n: 6, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  export_name: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  numerical_values: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: i.FE.readUint32,
                    pbr: i.FE.readPackedUint32,
                    bw: i.Xc.writeRepeatedUint32,
                  },
                },
              }),
            ft.sm_m
          );
        }
        static MBF() {
          return ft.sm_mbf || (ft.sm_mbf = i.Bh(ft.M())), ft.sm_mbf;
        }
        toObject(e = !1) {
          return ft.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ft.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ft.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ft();
          return ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ft.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ft.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetEmbeddingValues_Request";
        }
      }
      class mt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            mt.prototype.result || i.aR(mt.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            mt.sm_m ||
              (mt.sm_m = {
                proto: mt,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  embedding_data: { n: 2, c: ht, r: !0, q: !0 },
                },
              }),
            mt.sm_m
          );
        }
        static MBF() {
          return mt.sm_mbf || (mt.sm_mbf = i.Bh(mt.M())), mt.sm_mbf;
        }
        toObject(e = !1) {
          return mt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(mt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(mt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new mt();
          return mt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(mt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(mt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetEmbeddingValues_Response";
        }
      }
      class ht extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ht.prototype.numerical_value || i.aR(ht.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            ht.sm_m ||
              (ht.sm_m = {
                proto: ht,
                fields: {
                  numerical_value: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  embedding_values: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                },
              }),
            ht.sm_m
          );
        }
        static MBF() {
          return ht.sm_mbf || (ht.sm_mbf = i.Bh(ht.M())), ht.sm_mbf;
        }
        toObject(e = !1) {
          return ht.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(ht.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(ht.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new ht();
          return ht.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(ht.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(ht.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return ht.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetEmbeddingValues_Response_EmbeddingData";
        }
      }
      class pt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pt.prototype.project_id || i.aR(pt.M()),
            o.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            pt.sm_m ||
              (pt.sm_m = {
                proto: pt,
                fields: {
                  project_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  published_version: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  train_id: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  export_name: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  result_count: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  values: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                  fetch_id: { n: 7, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            pt.sm_m
          );
        }
        static MBF() {
          return pt.sm_mbf || (pt.sm_mbf = i.Bh(pt.M())), pt.sm_mbf;
        }
        toObject(e = !1) {
          return pt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(pt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(pt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new pt();
          return pt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(pt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(pt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return pt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetNearestEmbedding_Request";
        }
      }
      class yt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            yt.prototype.result || i.aR(yt.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            yt.sm_m ||
              (yt.sm_m = {
                proto: yt,
                fields: {
                  result: { n: 1, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  near_embeddings: { n: 2, c: gt, r: !0, q: !0 },
                },
              }),
            yt.sm_m
          );
        }
        static MBF() {
          return yt.sm_mbf || (yt.sm_mbf = i.Bh(yt.M())), yt.sm_mbf;
        }
        toObject(e = !1) {
          return yt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(yt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(yt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new yt();
          return yt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(yt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(yt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return yt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetNearestEmbedding_Response";
        }
      }
      class gt extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            gt.prototype.value || i.aR(gt.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            gt.sm_m ||
              (gt.sm_m = {
                proto: gt,
                fields: {
                  value: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  distance: { n: 2, br: i.FE.readFloat, bw: i.Xc.writeFloat },
                  embedding_values: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: i.FE.readFloat,
                    pbr: i.FE.readPackedFloat,
                    bw: i.Xc.writeRepeatedFloat,
                  },
                },
              }),
            gt.sm_m
          );
        }
        static MBF() {
          return gt.sm_mbf || (gt.sm_mbf = i.Bh(gt.M())), gt.sm_mbf;
        }
        toObject(e = !1) {
          return gt.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(gt.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(gt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new gt();
          return gt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(gt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(gt.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return gt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgSteamLearn_GetNearestEmbedding_Response_NearEmbedding";
        }
      }
      var bt;
      !(function (e) {
        (e.CreateProject = function (e, t) {
          return e.SendMsg("SteamLearn.CreateProject#1", (0, a.MD)(be, t), ve, {
            ePrivilege: 1,
          });
        }),
          (e.EditProject = function (e, t) {
            return e.SendMsg("SteamLearn.EditProject#1", (0, a.MD)(Fe, t), Re, {
              ePrivilege: 1,
            });
          }),
          (e.ListProjects = function (e, t) {
            return e.SendMsg(
              "SteamLearn.ListProjects#1",
              (0, a.MD)(Be, t),
              we,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetProject = function (e, t) {
            return e.SendMsg("SteamLearn.GetProject#1", (0, a.MD)(_e, t), Me, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.PublishProject = function (e, t) {
            return e.SendMsg(
              "SteamLearn.PublishProject#1",
              (0, a.MD)(je, t),
              xe,
              { ePrivilege: 1 },
            );
          }),
          (e.RegisterDataSource = function (e, t) {
            return e.SendMsg(
              "SteamLearn.RegisterDataSource#1",
              (0, a.MD)(Y, t),
              H,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.ListDataSources = function (e, t) {
            return e.SendMsg(
              "SteamLearn.ListDataSources#1",
              (0, a.MD)(Se, t),
              ze,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetDataSource = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetDataSource#1",
              (0, a.MD)(Ee, t),
              Oe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.CacheData = function (e, t) {
            return e.SendMsg("SteamLearn.CacheData#1", (0, a.MD)(G, t), K, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SnapshotProject = function (e, t) {
            return e.SendMsg(
              "SteamLearn.SnapshotProject#1",
              (0, a.MD)(Q, t),
              J,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.Inference = function (e, t) {
            return e.SendMsg("SteamLearn.Inference#1", (0, a.MD)(ee, t), te, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.InferenceMetadata = function (e, t) {
            return e.SendMsg(
              "SteamLearn.InferenceMetadata#1",
              (0, a.MD)(re, t),
              ne,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.InferenceBackend = function (e, t) {
            return e.SendMsg(
              "SteamLearn.InferenceBackend#1",
              (0, a.MD)(Qe, t),
              Je,
              { ePrivilege: 1 },
            );
          }),
          (e.BatchOperation = function (e, t) {
            return e.SendMsg(
              "SteamLearn.BatchOperation#1",
              (0, a.MD)(ye, t),
              ge,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.Train = function (e, t) {
            return e.SendMsg("SteamLearn.Train#1", (0, a.MD)(Ce, t), Pe, {
              ePrivilege: 1,
            });
          }),
          (e.GetFetchStatusVersions = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetFetchStatusVersions#1",
              (0, a.MD)(Ie, t),
              Ne,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetTrainStatusVersions = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetTrainStatusVersions#1",
              (0, a.MD)(Ae, t),
              De,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetBatchedStatus = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetBatchedStatus#1",
              (0, a.MD)(Ue, t),
              ke,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetFetchStatus = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetFetchStatus#1",
              (0, a.MD)(Xe, t),
              Le,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetTrainStatus = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetTrainStatus#1",
              (0, a.MD)(Ze, t),
              $e,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetTrainLive = function (e, t) {
            return e.SendMsg(
              "SteamLearn.SetTrainLive#1",
              (0, a.MD)(He, t),
              Ge,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetLogEvents = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetLogEvents#1",
              (0, a.MD)(ut, t),
              dt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetEmbeddingValues = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetEmbeddingValues#1",
              (0, a.MD)(ft, t),
              mt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetNearestEmbedding = function (e, t) {
            return e.SendMsg(
              "SteamLearn.GetNearestEmbedding#1",
              (0, a.MD)(pt, t),
              yt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(bt || (bt = {}));
    },
    7785: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => l });
      var n = { value: () => {} };
      function i() {
        for (var e, t = 0, r = arguments.length, n = {}; t < r; ++t) {
          if (!(e = arguments[t] + "") || e in n || /[\s.]/.test(e))
            throw new Error("illegal type: " + e);
          n[e] = [];
        }
        return new a(n);
      }
      function a(e) {
        this._ = e;
      }
      function o(e, t) {
        for (var r, n = 0, i = e.length; n < i; ++n)
          if ((r = e[n]).name === t) return r.value;
      }
      function s(e, t, r) {
        for (var i = 0, a = e.length; i < a; ++i)
          if (e[i].name === t) {
            (e[i] = n), (e = e.slice(0, i).concat(e.slice(i + 1)));
            break;
          }
        return null != r && e.push({ name: t, value: r }), e;
      }
      a.prototype = i.prototype = {
        constructor: a,
        on: function (e, t) {
          var r,
            n,
            i = this._,
            a =
              ((n = i),
              (e + "")
                .trim()
                .split(/^|\s+/)
                .map(function (e) {
                  var t = "",
                    r = e.indexOf(".");
                  if (
                    (r >= 0 && ((t = e.slice(r + 1)), (e = e.slice(0, r))),
                    e && !n.hasOwnProperty(e))
                  )
                    throw new Error("unknown type: " + e);
                  return { type: e, name: t };
                })),
            l = -1,
            c = a.length;
          if (!(arguments.length < 2)) {
            if (null != t && "function" != typeof t)
              throw new Error("invalid callback: " + t);
            for (; ++l < c; )
              if ((r = (e = a[l]).type)) i[r] = s(i[r], e.name, t);
              else if (null == t) for (r in i) i[r] = s(i[r], e.name, null);
            return this;
          }
          for (; ++l < c; )
            if ((r = (e = a[l]).type) && (r = o(i[r], e.name))) return r;
        },
        copy: function () {
          var e = {},
            t = this._;
          for (var r in t) e[r] = t[r].slice();
          return new a(e);
        },
        call: function (e, t) {
          if ((r = arguments.length - 2) > 0)
            for (var r, n, i = new Array(r), a = 0; a < r; ++a)
              i[a] = arguments[a + 2];
          if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
          for (a = 0, r = (n = this._[e]).length; a < r; ++a)
            n[a].value.apply(t, i);
        },
        apply: function (e, t, r) {
          if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
          for (var n = this._[e], i = 0, a = n.length; i < a; ++i)
            n[i].value.apply(t, r);
        },
      };
      const l = i;
    },
    12466: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => o, Z: () => a });
      var n = r(37788),
        i = r(70393);
      function a(e) {
        var t = e.document.documentElement,
          r = (0, n.Z)(e).on("dragstart.drag", i.ZP, i.Dd);
        "onselectstart" in t
          ? r.on("selectstart.drag", i.ZP, i.Dd)
          : ((t.__noselect = t.style.MozUserSelect),
            (t.style.MozUserSelect = "none"));
      }
      function o(e, t) {
        var r = e.document.documentElement,
          a = (0, n.Z)(e).on("dragstart.drag", null);
        t &&
          (a.on("click.drag", i.ZP, i.Dd),
          setTimeout(function () {
            a.on("click.drag", null);
          }, 0)),
          "onselectstart" in r
            ? a.on("selectstart.drag", null)
            : ((r.style.MozUserSelect = r.__noselect), delete r.__noselect);
      }
    },
    70393: (e, t, r) => {
      "use strict";
      r.d(t, { Dd: () => i, Q7: () => n, ZP: () => o, rG: () => a });
      const n = { passive: !1 },
        i = { capture: !0, passive: !1 };
      function a(e) {
        e.stopImmediatePropagation();
      }
      function o(e) {
        e.preventDefault(), e.stopImmediatePropagation();
      }
    },
    36749: (e, t, r) => {
      "use strict";
      function n(e) {
        return function () {
          return this.matches(e);
        };
      }
      function i(e) {
        return function (t) {
          return t.matches(e);
        };
      }
      r.d(t, { P: () => i, Z: () => n });
    },
    71758: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      var n = r(6070);
      function i(e) {
        var t = (e += ""),
          r = t.indexOf(":");
        return (
          r >= 0 && "xmlns" !== (t = e.slice(0, r)) && (e = e.slice(r + 1)),
          n.Z.hasOwnProperty(t) ? { space: n.Z[t], local: e } : e
        );
      }
    },
    6070: (e, t, r) => {
      "use strict";
      r.d(t, { P: () => n, Z: () => i });
      var n = "http://www.w3.org/1999/xhtml";
      const i = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: n,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      };
    },
    65683: (e, t, r) => {
      "use strict";
      function n(e, t) {
        if (
          ((e = (function (e) {
            let t;
            for (; (t = e.sourceEvent); ) e = t;
            return e;
          })(e)),
          void 0 === t && (t = e.currentTarget),
          t)
        ) {
          var r = t.ownerSVGElement || t;
          if (r.createSVGPoint) {
            var n = r.createSVGPoint();
            return (
              (n.x = e.clientX),
              (n.y = e.clientY),
              [(n = n.matrixTransform(t.getScreenCTM().inverse())).x, n.y]
            );
          }
          if (t.getBoundingClientRect) {
            var i = t.getBoundingClientRect();
            return [
              e.clientX - i.left - t.clientLeft,
              e.clientY - i.top - t.clientTop,
            ];
          }
        }
        return [e.pageX, e.pageY];
      }
      r.d(t, { Z: () => n });
    },
    37788: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      var n = r(46926);
      function i(e) {
        return "string" == typeof e
          ? new n.Y1([[document.querySelector(e)]], [document.documentElement])
          : new n.Y1([[e]], n.Jz);
      }
    },
    46926: (e, t, r) => {
      "use strict";
      r.d(t, { Y1: () => oe, ZP: () => le, Jz: () => ae });
      var n = r(81944);
      var i = r(85163);
      function a(e) {
        return function () {
          return null == (t = e.apply(this, arguments))
            ? []
            : Array.isArray(t)
            ? t
            : Array.from(t);
          var t;
        };
      }
      var o = r(36749),
        s = Array.prototype.find;
      function l() {
        return this.firstElementChild;
      }
      var c = Array.prototype.filter;
      function u() {
        return Array.from(this.children);
      }
      function d(e) {
        return new Array(e.length);
      }
      function f(e, t) {
        (this.ownerDocument = e.ownerDocument),
          (this.namespaceURI = e.namespaceURI),
          (this._next = null),
          (this._parent = e),
          (this.__data__ = t);
      }
      function m(e, t, r, n, i, a) {
        for (var o, s = 0, l = t.length, c = a.length; s < c; ++s)
          (o = t[s])
            ? ((o.__data__ = a[s]), (n[s] = o))
            : (r[s] = new f(e, a[s]));
        for (; s < l; ++s) (o = t[s]) && (i[s] = o);
      }
      function h(e, t, r, n, i, a, o) {
        var s,
          l,
          c,
          u = new Map(),
          d = t.length,
          m = a.length,
          h = new Array(d);
        for (s = 0; s < d; ++s)
          (l = t[s]) &&
            ((h[s] = c = o.call(l, l.__data__, s, t) + ""),
            u.has(c) ? (i[s] = l) : u.set(c, l));
        for (s = 0; s < m; ++s)
          (c = o.call(e, a[s], s, a) + ""),
            (l = u.get(c))
              ? ((n[s] = l), (l.__data__ = a[s]), u.delete(c))
              : (r[s] = new f(e, a[s]));
        for (s = 0; s < d; ++s) (l = t[s]) && u.get(h[s]) === l && (i[s] = l);
      }
      function p(e) {
        return e.__data__;
      }
      function y(e) {
        return "object" == typeof e && "length" in e ? e : Array.from(e);
      }
      function g(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
      }
      f.prototype = {
        constructor: f,
        appendChild: function (e) {
          return this._parent.insertBefore(e, this._next);
        },
        insertBefore: function (e, t) {
          return this._parent.insertBefore(e, t);
        },
        querySelector: function (e) {
          return this._parent.querySelector(e);
        },
        querySelectorAll: function (e) {
          return this._parent.querySelectorAll(e);
        },
      };
      var b = r(71758);
      function v(e) {
        return function () {
          this.removeAttribute(e);
        };
      }
      function B(e) {
        return function () {
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function w(e, t) {
        return function () {
          this.setAttribute(e, t);
        };
      }
      function _(e, t) {
        return function () {
          this.setAttributeNS(e.space, e.local, t);
        };
      }
      function M(e, t) {
        return function () {
          var r = t.apply(this, arguments);
          null == r ? this.removeAttribute(e) : this.setAttribute(e, r);
        };
      }
      function S(e, t) {
        return function () {
          var r = t.apply(this, arguments);
          null == r
            ? this.removeAttributeNS(e.space, e.local)
            : this.setAttributeNS(e.space, e.local, r);
        };
      }
      var z = r(7843);
      function E(e) {
        return function () {
          delete this[e];
        };
      }
      function O(e, t) {
        return function () {
          this[e] = t;
        };
      }
      function F(e, t) {
        return function () {
          var r = t.apply(this, arguments);
          null == r ? delete this[e] : (this[e] = r);
        };
      }
      function R(e) {
        return e.trim().split(/^|\s+/);
      }
      function j(e) {
        return e.classList || new x(e);
      }
      function x(e) {
        (this._node = e), (this._names = R(e.getAttribute("class") || ""));
      }
      function C(e, t) {
        for (var r = j(e), n = -1, i = t.length; ++n < i; ) r.add(t[n]);
      }
      function T(e, t) {
        for (var r = j(e), n = -1, i = t.length; ++n < i; ) r.remove(t[n]);
      }
      function W(e) {
        return function () {
          C(this, e);
        };
      }
      function P(e) {
        return function () {
          T(this, e);
        };
      }
      function I(e, t) {
        return function () {
          (t.apply(this, arguments) ? C : T)(this, e);
        };
      }
      function N() {
        this.textContent = "";
      }
      function A(e) {
        return function () {
          this.textContent = e;
        };
      }
      function D(e) {
        return function () {
          var t = e.apply(this, arguments);
          this.textContent = null == t ? "" : t;
        };
      }
      function U() {
        this.innerHTML = "";
      }
      function k(e) {
        return function () {
          this.innerHTML = e;
        };
      }
      function X(e) {
        return function () {
          var t = e.apply(this, arguments);
          this.innerHTML = null == t ? "" : t;
        };
      }
      function L() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function q() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      x.prototype = {
        add: function (e) {
          this._names.indexOf(e) < 0 &&
            (this._names.push(e),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function (e) {
          var t = this._names.indexOf(e);
          t >= 0 &&
            (this._names.splice(t, 1),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function (e) {
          return this._names.indexOf(e) >= 0;
        },
      };
      var Z = r(6070);
      function $(e) {
        return function () {
          var t = this.ownerDocument,
            r = this.namespaceURI;
          return r === Z.P && t.documentElement.namespaceURI === Z.P
            ? t.createElement(e)
            : t.createElementNS(r, e);
        };
      }
      function V(e) {
        return function () {
          return this.ownerDocument.createElementNS(e.space, e.local);
        };
      }
      function Y(e) {
        var t = (0, b.Z)(e);
        return (t.local ? V : $)(t);
      }
      function H() {
        return null;
      }
      function G() {
        var e = this.parentNode;
        e && e.removeChild(this);
      }
      function K() {
        var e = this.cloneNode(!1),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function Q() {
        var e = this.cloneNode(!0),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function J(e) {
        return function () {
          var t = this.__on;
          if (t) {
            for (var r, n = 0, i = -1, a = t.length; n < a; ++n)
              (r = t[n]),
                (e.type && r.type !== e.type) || r.name !== e.name
                  ? (t[++i] = r)
                  : this.removeEventListener(r.type, r.listener, r.options);
            ++i ? (t.length = i) : delete this.__on;
          }
        };
      }
      function ee(e, t, r) {
        return function () {
          var n,
            i = this.__on,
            a = (function (e) {
              return function (t) {
                e.call(this, t, this.__data__);
              };
            })(t);
          if (i)
            for (var o = 0, s = i.length; o < s; ++o)
              if ((n = i[o]).type === e.type && n.name === e.name)
                return (
                  this.removeEventListener(n.type, n.listener, n.options),
                  this.addEventListener(
                    n.type,
                    (n.listener = a),
                    (n.options = r),
                  ),
                  void (n.value = t)
                );
          this.addEventListener(e.type, a, r),
            (n = {
              type: e.type,
              name: e.name,
              value: t,
              listener: a,
              options: r,
            }),
            i ? i.push(n) : (this.__on = [n]);
        };
      }
      var te = r(90523);
      function re(e, t, r) {
        var n = (0, te.Z)(e),
          i = n.CustomEvent;
        "function" == typeof i
          ? (i = new i(t, r))
          : ((i = n.document.createEvent("Event")),
            r
              ? (i.initEvent(t, r.bubbles, r.cancelable), (i.detail = r.detail))
              : i.initEvent(t, !1, !1)),
          e.dispatchEvent(i);
      }
      function ne(e, t) {
        return function () {
          return re(this, e, t);
        };
      }
      function ie(e, t) {
        return function () {
          return re(this, e, t.apply(this, arguments));
        };
      }
      var ae = [null];
      function oe(e, t) {
        (this._groups = e), (this._parents = t);
      }
      function se() {
        return new oe([[document.documentElement]], ae);
      }
      oe.prototype = se.prototype = {
        constructor: oe,
        select: function (e) {
          "function" != typeof e && (e = (0, n.Z)(e));
          for (
            var t = this._groups, r = t.length, i = new Array(r), a = 0;
            a < r;
            ++a
          )
            for (
              var o,
                s,
                l = t[a],
                c = l.length,
                u = (i[a] = new Array(c)),
                d = 0;
              d < c;
              ++d
            )
              (o = l[d]) &&
                (s = e.call(o, o.__data__, d, l)) &&
                ("__data__" in o && (s.__data__ = o.__data__), (u[d] = s));
          return new oe(i, this._parents);
        },
        selectAll: function (e) {
          e = "function" == typeof e ? a(e) : (0, i.Z)(e);
          for (
            var t = this._groups, r = t.length, n = [], o = [], s = 0;
            s < r;
            ++s
          )
            for (var l, c = t[s], u = c.length, d = 0; d < u; ++d)
              (l = c[d]) && (n.push(e.call(l, l.__data__, d, c)), o.push(l));
          return new oe(n, o);
        },
        selectChild: function (e) {
          return this.select(
            null == e
              ? l
              : (function (e) {
                  return function () {
                    return s.call(this.children, e);
                  };
                })("function" == typeof e ? e : (0, o.P)(e)),
          );
        },
        selectChildren: function (e) {
          return this.selectAll(
            null == e
              ? u
              : (function (e) {
                  return function () {
                    return c.call(this.children, e);
                  };
                })("function" == typeof e ? e : (0, o.P)(e)),
          );
        },
        filter: function (e) {
          "function" != typeof e && (e = (0, o.Z)(e));
          for (
            var t = this._groups, r = t.length, n = new Array(r), i = 0;
            i < r;
            ++i
          )
            for (
              var a, s = t[i], l = s.length, c = (n[i] = []), u = 0;
              u < l;
              ++u
            )
              (a = s[u]) && e.call(a, a.__data__, u, s) && c.push(a);
          return new oe(n, this._parents);
        },
        data: function (e, t) {
          if (!arguments.length) return Array.from(this, p);
          var r,
            n = t ? h : m,
            i = this._parents,
            a = this._groups;
          "function" != typeof e &&
            ((r = e),
            (e = function () {
              return r;
            }));
          for (
            var o = a.length,
              s = new Array(o),
              l = new Array(o),
              c = new Array(o),
              u = 0;
            u < o;
            ++u
          ) {
            var d = i[u],
              f = a[u],
              g = f.length,
              b = y(e.call(d, d && d.__data__, u, i)),
              v = b.length,
              B = (l[u] = new Array(v)),
              w = (s[u] = new Array(v));
            n(d, f, B, w, (c[u] = new Array(g)), b, t);
            for (var _, M, S = 0, z = 0; S < v; ++S)
              if ((_ = B[S])) {
                for (S >= z && (z = S + 1); !(M = w[z]) && ++z < v; );
                _._next = M || null;
              }
          }
          return ((s = new oe(s, i))._enter = l), (s._exit = c), s;
        },
        enter: function () {
          return new oe(this._enter || this._groups.map(d), this._parents);
        },
        exit: function () {
          return new oe(this._exit || this._groups.map(d), this._parents);
        },
        join: function (e, t, r) {
          var n = this.enter(),
            i = this,
            a = this.exit();
          return (
            "function" == typeof e
              ? (n = e(n)) && (n = n.selection())
              : (n = n.append(e + "")),
            null != t && (i = t(i)) && (i = i.selection()),
            null == r ? a.remove() : r(a),
            n && i ? n.merge(i).order() : i
          );
        },
        merge: function (e) {
          for (
            var t = e.selection ? e.selection() : e,
              r = this._groups,
              n = t._groups,
              i = r.length,
              a = n.length,
              o = Math.min(i, a),
              s = new Array(i),
              l = 0;
            l < o;
            ++l
          )
            for (
              var c,
                u = r[l],
                d = n[l],
                f = u.length,
                m = (s[l] = new Array(f)),
                h = 0;
              h < f;
              ++h
            )
              (c = u[h] || d[h]) && (m[h] = c);
          for (; l < i; ++l) s[l] = r[l];
          return new oe(s, this._parents);
        },
        selection: function () {
          return this;
        },
        order: function () {
          for (var e = this._groups, t = -1, r = e.length; ++t < r; )
            for (var n, i = e[t], a = i.length - 1, o = i[a]; --a >= 0; )
              (n = i[a]) &&
                (o &&
                  4 ^ n.compareDocumentPosition(o) &&
                  o.parentNode.insertBefore(n, o),
                (o = n));
          return this;
        },
        sort: function (e) {
          function t(t, r) {
            return t && r ? e(t.__data__, r.__data__) : !t - !r;
          }
          e || (e = g);
          for (
            var r = this._groups, n = r.length, i = new Array(n), a = 0;
            a < n;
            ++a
          ) {
            for (
              var o, s = r[a], l = s.length, c = (i[a] = new Array(l)), u = 0;
              u < l;
              ++u
            )
              (o = s[u]) && (c[u] = o);
            c.sort(t);
          }
          return new oe(i, this._parents).order();
        },
        call: function () {
          var e = arguments[0];
          return (arguments[0] = this), e.apply(null, arguments), this;
        },
        nodes: function () {
          return Array.from(this);
        },
        node: function () {
          for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
            for (var n = e[t], i = 0, a = n.length; i < a; ++i) {
              var o = n[i];
              if (o) return o;
            }
          return null;
        },
        size: function () {
          let e = 0;
          for (const t of this) ++e;
          return e;
        },
        empty: function () {
          return !this.node();
        },
        each: function (e) {
          for (var t = this._groups, r = 0, n = t.length; r < n; ++r)
            for (var i, a = t[r], o = 0, s = a.length; o < s; ++o)
              (i = a[o]) && e.call(i, i.__data__, o, a);
          return this;
        },
        attr: function (e, t) {
          var r = (0, b.Z)(e);
          if (arguments.length < 2) {
            var n = this.node();
            return r.local
              ? n.getAttributeNS(r.space, r.local)
              : n.getAttribute(r);
          }
          return this.each(
            (null == t
              ? r.local
                ? B
                : v
              : "function" == typeof t
              ? r.local
                ? S
                : M
              : r.local
              ? _
              : w)(r, t),
          );
        },
        style: z.Z,
        property: function (e, t) {
          return arguments.length > 1
            ? this.each((null == t ? E : "function" == typeof t ? F : O)(e, t))
            : this.node()[e];
        },
        classed: function (e, t) {
          var r = R(e + "");
          if (arguments.length < 2) {
            for (var n = j(this.node()), i = -1, a = r.length; ++i < a; )
              if (!n.contains(r[i])) return !1;
            return !0;
          }
          return this.each(("function" == typeof t ? I : t ? W : P)(r, t));
        },
        text: function (e) {
          return arguments.length
            ? this.each(null == e ? N : ("function" == typeof e ? D : A)(e))
            : this.node().textContent;
        },
        html: function (e) {
          return arguments.length
            ? this.each(null == e ? U : ("function" == typeof e ? X : k)(e))
            : this.node().innerHTML;
        },
        raise: function () {
          return this.each(L);
        },
        lower: function () {
          return this.each(q);
        },
        append: function (e) {
          var t = "function" == typeof e ? e : Y(e);
          return this.select(function () {
            return this.appendChild(t.apply(this, arguments));
          });
        },
        insert: function (e, t) {
          var r = "function" == typeof e ? e : Y(e),
            i = null == t ? H : "function" == typeof t ? t : (0, n.Z)(t);
          return this.select(function () {
            return this.insertBefore(
              r.apply(this, arguments),
              i.apply(this, arguments) || null,
            );
          });
        },
        remove: function () {
          return this.each(G);
        },
        clone: function (e) {
          return this.select(e ? Q : K);
        },
        datum: function (e) {
          return arguments.length
            ? this.property("__data__", e)
            : this.node().__data__;
        },
        on: function (e, t, r) {
          var n,
            i,
            a = (function (e) {
              return e
                .trim()
                .split(/^|\s+/)
                .map(function (e) {
                  var t = "",
                    r = e.indexOf(".");
                  return (
                    r >= 0 && ((t = e.slice(r + 1)), (e = e.slice(0, r))),
                    { type: e, name: t }
                  );
                });
            })(e + ""),
            o = a.length;
          if (!(arguments.length < 2)) {
            for (s = t ? ee : J, n = 0; n < o; ++n) this.each(s(a[n], t, r));
            return this;
          }
          var s = this.node().__on;
          if (s)
            for (var l, c = 0, u = s.length; c < u; ++c)
              for (n = 0, l = s[c]; n < o; ++n)
                if ((i = a[n]).type === l.type && i.name === l.name)
                  return l.value;
        },
        dispatch: function (e, t) {
          return this.each(("function" == typeof t ? ie : ne)(e, t));
        },
        [Symbol.iterator]: function* () {
          for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
            for (var n, i = e[t], a = 0, o = i.length; a < o; ++a)
              (n = i[a]) && (yield n);
        },
      };
      const le = se;
    },
    7843: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => l, Z: () => s });
      var n = r(90523);
      function i(e) {
        return function () {
          this.style.removeProperty(e);
        };
      }
      function a(e, t, r) {
        return function () {
          this.style.setProperty(e, t, r);
        };
      }
      function o(e, t, r) {
        return function () {
          var n = t.apply(this, arguments);
          null == n
            ? this.style.removeProperty(e)
            : this.style.setProperty(e, n, r);
        };
      }
      function s(e, t, r) {
        return arguments.length > 1
          ? this.each(
              (null == t ? i : "function" == typeof t ? o : a)(
                e,
                t,
                null == r ? "" : r,
              ),
            )
          : l(this.node(), e);
      }
      function l(e, t) {
        return (
          e.style.getPropertyValue(t) ||
          (0, n.Z)(e).getComputedStyle(e, null).getPropertyValue(t)
        );
      }
    },
    81944: (e, t, r) => {
      "use strict";
      function n() {}
      function i(e) {
        return null == e
          ? n
          : function () {
              return this.querySelector(e);
            };
      }
      r.d(t, { Z: () => i });
    },
    85163: (e, t, r) => {
      "use strict";
      function n() {
        return [];
      }
      function i(e) {
        return null == e
          ? n
          : function () {
              return this.querySelectorAll(e);
            };
      }
      r.d(t, { Z: () => i });
    },
    90523: (e, t, r) => {
      "use strict";
      function n(e) {
        return (
          (e.ownerDocument && e.ownerDocument.defaultView) ||
          (e.document && e) ||
          e.defaultView
        );
      }
      r.d(t, { Z: () => n });
    },
    96295: (e, t, r) => {
      "use strict";
      r.d(t, { sP: () => ke, CR: () => Ce });
      var n = r(7785),
        i = r(12466);
      function a(e) {
        return ((e = Math.exp(e)) + 1 / e) / 2;
      }
      const o = (function e(t, r, n) {
        function i(e, i) {
          var o,
            s,
            l = e[0],
            c = e[1],
            u = e[2],
            d = i[0],
            f = i[1],
            m = i[2],
            h = d - l,
            p = f - c,
            y = h * h + p * p;
          if (y < 1e-12)
            (s = Math.log(m / u) / t),
              (o = function (e) {
                return [l + e * h, c + e * p, u * Math.exp(t * e * s)];
              });
          else {
            var g = Math.sqrt(y),
              b = (m * m - u * u + n * y) / (2 * u * r * g),
              v = (m * m - u * u - n * y) / (2 * m * r * g),
              B = Math.log(Math.sqrt(b * b + 1) - b),
              w = Math.log(Math.sqrt(v * v + 1) - v);
            (s = (w - B) / t),
              (o = function (e) {
                var n,
                  i = e * s,
                  o = a(B),
                  d =
                    (u / (r * g)) *
                    (o *
                      ((n = t * i + B), ((n = Math.exp(2 * n)) - 1) / (n + 1)) -
                      (function (e) {
                        return ((e = Math.exp(e)) - 1 / e) / 2;
                      })(B));
                return [l + d * h, c + d * p, (u * o) / a(t * i + B)];
              });
          }
          return (o.duration = (1e3 * s * t) / Math.SQRT2), o;
        }
        return (
          (i.rho = function (t) {
            var r = Math.max(0.001, +t),
              n = r * r;
            return e(r, n, n * n);
          }),
          i
        );
      })(Math.SQRT2, 2, 4);
      var s,
        l,
        c = r(37788),
        u = r(65683),
        d = r(46926),
        f = 0,
        m = 0,
        h = 0,
        p = 1e3,
        y = 0,
        g = 0,
        b = 0,
        v =
          "object" == typeof performance && performance.now
            ? performance
            : Date,
        B =
          "object" == typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (e) {
                setTimeout(e, 17);
              };
      function w() {
        return g || (B(_), (g = v.now() + b));
      }
      function _() {
        g = 0;
      }
      function M() {
        this._call = this._time = this._next = null;
      }
      function S(e, t, r) {
        var n = new M();
        return n.restart(e, t, r), n;
      }
      function z() {
        (g = (y = v.now()) + b), (f = m = 0);
        try {
          !(function () {
            w(), ++f;
            for (var e, t = s; t; )
              (e = g - t._time) >= 0 && t._call.call(void 0, e), (t = t._next);
            --f;
          })();
        } finally {
          (f = 0),
            (function () {
              var e,
                t,
                r = s,
                n = 1 / 0;
              for (; r; )
                r._call
                  ? (n > r._time && (n = r._time), (e = r), (r = r._next))
                  : ((t = r._next),
                    (r._next = null),
                    (r = e ? (e._next = t) : (s = t)));
              (l = e), O(n);
            })(),
            (g = 0);
        }
      }
      function E() {
        var e = v.now(),
          t = e - y;
        t > p && ((b -= t), (y = e));
      }
      function O(e) {
        f ||
          (m && (m = clearTimeout(m)),
          e - g > 24
            ? (e < 1 / 0 && (m = setTimeout(z, e - v.now() - b)),
              h && (h = clearInterval(h)))
            : (h || ((y = v.now()), (h = setInterval(E, p))), (f = 1), B(z)));
      }
      function F(e, t, r) {
        var n = new M();
        return (
          (t = null == t ? 0 : +t),
          n.restart(
            (r) => {
              n.stop(), e(r + t);
            },
            t,
            r,
          ),
          n
        );
      }
      M.prototype = S.prototype = {
        constructor: M,
        restart: function (e, t, r) {
          if ("function" != typeof e)
            throw new TypeError("callback is not a function");
          (r = (null == r ? w() : +r) + (null == t ? 0 : +t)),
            this._next ||
              l === this ||
              (l ? (l._next = this) : (s = this), (l = this)),
            (this._call = e),
            (this._time = r),
            O();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), O());
        },
      };
      var R = (0, n.Z)("start", "end", "cancel", "interrupt"),
        j = [],
        x = 0,
        C = 1,
        T = 2,
        W = 3,
        P = 4,
        I = 5,
        N = 6;
      function A(e, t, r, n, i, a) {
        var o = e.__transition;
        if (o) {
          if (r in o) return;
        } else e.__transition = {};
        !(function (e, t, r) {
          var n,
            i = e.__transition;
          function a(e) {
            (r.state = C),
              r.timer.restart(o, r.delay, r.time),
              r.delay <= e && o(e - r.delay);
          }
          function o(a) {
            var c, u, d, f;
            if (r.state !== C) return l();
            for (c in i)
              if ((f = i[c]).name === r.name) {
                if (f.state === W) return F(o);
                f.state === P
                  ? ((f.state = N),
                    f.timer.stop(),
                    f.on.call("interrupt", e, e.__data__, f.index, f.group),
                    delete i[c])
                  : +c < t &&
                    ((f.state = N),
                    f.timer.stop(),
                    f.on.call("cancel", e, e.__data__, f.index, f.group),
                    delete i[c]);
              }
            if (
              (F(function () {
                r.state === W &&
                  ((r.state = P), r.timer.restart(s, r.delay, r.time), s(a));
              }),
              (r.state = T),
              r.on.call("start", e, e.__data__, r.index, r.group),
              r.state === T)
            ) {
              for (
                r.state = W, n = new Array((d = r.tween.length)), c = 0, u = -1;
                c < d;
                ++c
              )
                (f = r.tween[c].value.call(e, e.__data__, r.index, r.group)) &&
                  (n[++u] = f);
              n.length = u + 1;
            }
          }
          function s(t) {
            for (
              var i =
                  t < r.duration
                    ? r.ease.call(null, t / r.duration)
                    : (r.timer.restart(l), (r.state = I), 1),
                a = -1,
                o = n.length;
              ++a < o;

            )
              n[a].call(e, i);
            r.state === I &&
              (r.on.call("end", e, e.__data__, r.index, r.group), l());
          }
          function l() {
            for (var n in ((r.state = N), r.timer.stop(), delete i[t], i))
              return;
            delete e.__transition;
          }
          (i[t] = r), (r.timer = S(a, 0, r.time));
        })(e, r, {
          name: t,
          index: n,
          group: i,
          on: R,
          tween: j,
          time: a.time,
          delay: a.delay,
          duration: a.duration,
          ease: a.ease,
          timer: null,
          state: x,
        });
      }
      function D(e, t) {
        var r = k(e, t);
        if (r.state > x) throw new Error("too late; already scheduled");
        return r;
      }
      function U(e, t) {
        var r = k(e, t);
        if (r.state > W) throw new Error("too late; already running");
        return r;
      }
      function k(e, t) {
        var r = e.__transition;
        if (!r || !(r = r[t])) throw new Error("transition not found");
        return r;
      }
      function X(e, t) {
        var r,
          n,
          i,
          a = e.__transition,
          o = !0;
        if (a) {
          for (i in ((t = null == t ? null : t + ""), a))
            (r = a[i]).name === t
              ? ((n = r.state > T && r.state < I),
                (r.state = N),
                r.timer.stop(),
                r.on.call(
                  n ? "interrupt" : "cancel",
                  e,
                  e.__data__,
                  r.index,
                  r.group,
                ),
                delete a[i])
              : (o = !1);
          o && delete e.__transition;
        }
      }
      var L,
        q = r(21669),
        Z = 180 / Math.PI,
        $ = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        };
      function V(e, t, r, n, i, a) {
        var o, s, l;
        return (
          (o = Math.sqrt(e * e + t * t)) && ((e /= o), (t /= o)),
          (l = e * r + t * n) && ((r -= e * l), (n -= t * l)),
          (s = Math.sqrt(r * r + n * n)) && ((r /= s), (n /= s), (l /= s)),
          e * n < t * r && ((e = -e), (t = -t), (l = -l), (o = -o)),
          {
            translateX: i,
            translateY: a,
            rotate: Math.atan2(t, e) * Z,
            skewX: Math.atan(l) * Z,
            scaleX: o,
            scaleY: s,
          }
        );
      }
      function Y(e, t, r, n) {
        function i(e) {
          return e.length ? e.pop() + " " : "";
        }
        return function (a, o) {
          var s = [],
            l = [];
          return (
            (a = e(a)),
            (o = e(o)),
            (function (e, n, i, a, o, s) {
              if (e !== i || n !== a) {
                var l = o.push("translate(", null, t, null, r);
                s.push(
                  { i: l - 4, x: (0, q.Z)(e, i) },
                  { i: l - 2, x: (0, q.Z)(n, a) },
                );
              } else (i || a) && o.push("translate(" + i + t + a + r);
            })(a.translateX, a.translateY, o.translateX, o.translateY, s, l),
            (function (e, t, r, a) {
              e !== t
                ? (e - t > 180 ? (t += 360) : t - e > 180 && (e += 360),
                  a.push({
                    i: r.push(i(r) + "rotate(", null, n) - 2,
                    x: (0, q.Z)(e, t),
                  }))
                : t && r.push(i(r) + "rotate(" + t + n);
            })(a.rotate, o.rotate, s, l),
            (function (e, t, r, a) {
              e !== t
                ? a.push({
                    i: r.push(i(r) + "skewX(", null, n) - 2,
                    x: (0, q.Z)(e, t),
                  })
                : t && r.push(i(r) + "skewX(" + t + n);
            })(a.skewX, o.skewX, s, l),
            (function (e, t, r, n, a, o) {
              if (e !== r || t !== n) {
                var s = a.push(i(a) + "scale(", null, ",", null, ")");
                o.push(
                  { i: s - 4, x: (0, q.Z)(e, r) },
                  { i: s - 2, x: (0, q.Z)(t, n) },
                );
              } else
                (1 === r && 1 === n) ||
                  a.push(i(a) + "scale(" + r + "," + n + ")");
            })(a.scaleX, a.scaleY, o.scaleX, o.scaleY, s, l),
            (a = o = null),
            function (e) {
              for (var t, r = -1, n = l.length; ++r < n; )
                s[(t = l[r]).i] = t.x(e);
              return s.join("");
            }
          );
        };
      }
      var H = Y(
          function (e) {
            const t = new (
              "function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
            )(e + "");
            return t.isIdentity ? $ : V(t.a, t.b, t.c, t.d, t.e, t.f);
          },
          "px, ",
          "px)",
          "deg)",
        ),
        G = Y(
          function (e) {
            return null == e
              ? $
              : (L ||
                  (L = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "g",
                  )),
                L.setAttribute("transform", e),
                (e = L.transform.baseVal.consolidate())
                  ? V((e = e.matrix).a, e.b, e.c, e.d, e.e, e.f)
                  : $);
          },
          ", ",
          ")",
          ")",
        ),
        K = r(71758);
      function Q(e, t) {
        var r, n;
        return function () {
          var i = U(this, e),
            a = i.tween;
          if (a !== r)
            for (var o = 0, s = (n = r = a).length; o < s; ++o)
              if (n[o].name === t) {
                (n = n.slice()).splice(o, 1);
                break;
              }
          i.tween = n;
        };
      }
      function J(e, t, r) {
        var n, i;
        if ("function" != typeof r) throw new Error();
        return function () {
          var a = U(this, e),
            o = a.tween;
          if (o !== n) {
            i = (n = o).slice();
            for (var s = { name: t, value: r }, l = 0, c = i.length; l < c; ++l)
              if (i[l].name === t) {
                i[l] = s;
                break;
              }
            l === c && i.push(s);
          }
          a.tween = i;
        };
      }
      function ee(e, t, r) {
        var n = e._id;
        return (
          e.each(function () {
            var e = U(this, n);
            (e.value || (e.value = {}))[t] = r.apply(this, arguments);
          }),
          function (e) {
            return k(e, n).value[t];
          }
        );
      }
      var te = r(30598),
        re = r(48623),
        ne = r(34242);
      function ie(e, t) {
        var r;
        return (
          "number" == typeof t
            ? q.Z
            : t instanceof te.ZP
            ? re.ZP
            : (r = (0, te.ZP)(t))
            ? ((t = r), re.ZP)
            : ne.Z
        )(e, t);
      }
      function ae(e) {
        return function () {
          this.removeAttribute(e);
        };
      }
      function oe(e) {
        return function () {
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function se(e, t, r) {
        var n,
          i,
          a = r + "";
        return function () {
          var o = this.getAttribute(e);
          return o === a ? null : o === n ? i : (i = t((n = o), r));
        };
      }
      function le(e, t, r) {
        var n,
          i,
          a = r + "";
        return function () {
          var o = this.getAttributeNS(e.space, e.local);
          return o === a ? null : o === n ? i : (i = t((n = o), r));
        };
      }
      function ce(e, t, r) {
        var n, i, a;
        return function () {
          var o,
            s,
            l = r(this);
          if (null != l)
            return (o = this.getAttribute(e)) === (s = l + "")
              ? null
              : o === n && s === i
              ? a
              : ((i = s), (a = t((n = o), l)));
          this.removeAttribute(e);
        };
      }
      function ue(e, t, r) {
        var n, i, a;
        return function () {
          var o,
            s,
            l = r(this);
          if (null != l)
            return (o = this.getAttributeNS(e.space, e.local)) === (s = l + "")
              ? null
              : o === n && s === i
              ? a
              : ((i = s), (a = t((n = o), l)));
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function de(e, t) {
        var r, n;
        function i() {
          var i = t.apply(this, arguments);
          return (
            i !== n &&
              (r =
                (n = i) &&
                (function (e, t) {
                  return function (r) {
                    this.setAttributeNS(e.space, e.local, t.call(this, r));
                  };
                })(e, i)),
            r
          );
        }
        return (i._value = t), i;
      }
      function fe(e, t) {
        var r, n;
        function i() {
          var i = t.apply(this, arguments);
          return (
            i !== n &&
              (r =
                (n = i) &&
                (function (e, t) {
                  return function (r) {
                    this.setAttribute(e, t.call(this, r));
                  };
                })(e, i)),
            r
          );
        }
        return (i._value = t), i;
      }
      function me(e, t) {
        return function () {
          D(this, e).delay = +t.apply(this, arguments);
        };
      }
      function he(e, t) {
        return (
          (t = +t),
          function () {
            D(this, e).delay = t;
          }
        );
      }
      function pe(e, t) {
        return function () {
          U(this, e).duration = +t.apply(this, arguments);
        };
      }
      function ye(e, t) {
        return (
          (t = +t),
          function () {
            U(this, e).duration = t;
          }
        );
      }
      var ge = r(36749);
      var be = r(81944);
      var ve = r(85163);
      var Be = d.ZP.prototype.constructor;
      var we = r(7843);
      function _e(e) {
        return function () {
          this.style.removeProperty(e);
        };
      }
      var Me = 0;
      function Se(e, t, r, n) {
        (this._groups = e),
          (this._parents = t),
          (this._name = r),
          (this._id = n);
      }
      function ze() {
        return ++Me;
      }
      var Ee = d.ZP.prototype;
      Se.prototype = function (e) {
        return (0, d.ZP)().transition(e);
      }.prototype = {
        constructor: Se,
        select: function (e) {
          var t = this._name,
            r = this._id;
          "function" != typeof e && (e = (0, be.Z)(e));
          for (
            var n = this._groups, i = n.length, a = new Array(i), o = 0;
            o < i;
            ++o
          )
            for (
              var s,
                l,
                c = n[o],
                u = c.length,
                d = (a[o] = new Array(u)),
                f = 0;
              f < u;
              ++f
            )
              (s = c[f]) &&
                (l = e.call(s, s.__data__, f, c)) &&
                ("__data__" in s && (l.__data__ = s.__data__),
                (d[f] = l),
                A(d[f], t, r, f, d, k(s, r)));
          return new Se(a, this._parents, t, r);
        },
        selectAll: function (e) {
          var t = this._name,
            r = this._id;
          "function" != typeof e && (e = (0, ve.Z)(e));
          for (
            var n = this._groups, i = n.length, a = [], o = [], s = 0;
            s < i;
            ++s
          )
            for (var l, c = n[s], u = c.length, d = 0; d < u; ++d)
              if ((l = c[d])) {
                for (
                  var f,
                    m = e.call(l, l.__data__, d, c),
                    h = k(l, r),
                    p = 0,
                    y = m.length;
                  p < y;
                  ++p
                )
                  (f = m[p]) && A(f, t, r, p, m, h);
                a.push(m), o.push(l);
              }
          return new Se(a, o, t, r);
        },
        selectChild: Ee.selectChild,
        selectChildren: Ee.selectChildren,
        filter: function (e) {
          "function" != typeof e && (e = (0, ge.Z)(e));
          for (
            var t = this._groups, r = t.length, n = new Array(r), i = 0;
            i < r;
            ++i
          )
            for (
              var a, o = t[i], s = o.length, l = (n[i] = []), c = 0;
              c < s;
              ++c
            )
              (a = o[c]) && e.call(a, a.__data__, c, o) && l.push(a);
          return new Se(n, this._parents, this._name, this._id);
        },
        merge: function (e) {
          if (e._id !== this._id) throw new Error();
          for (
            var t = this._groups,
              r = e._groups,
              n = t.length,
              i = r.length,
              a = Math.min(n, i),
              o = new Array(n),
              s = 0;
            s < a;
            ++s
          )
            for (
              var l,
                c = t[s],
                u = r[s],
                d = c.length,
                f = (o[s] = new Array(d)),
                m = 0;
              m < d;
              ++m
            )
              (l = c[m] || u[m]) && (f[m] = l);
          for (; s < n; ++s) o[s] = t[s];
          return new Se(o, this._parents, this._name, this._id);
        },
        selection: function () {
          return new Be(this._groups, this._parents);
        },
        transition: function () {
          for (
            var e = this._name,
              t = this._id,
              r = ze(),
              n = this._groups,
              i = n.length,
              a = 0;
            a < i;
            ++a
          )
            for (var o, s = n[a], l = s.length, c = 0; c < l; ++c)
              if ((o = s[c])) {
                var u = k(o, t);
                A(o, e, r, c, s, {
                  time: u.time + u.delay + u.duration,
                  delay: 0,
                  duration: u.duration,
                  ease: u.ease,
                });
              }
          return new Se(n, this._parents, e, r);
        },
        call: Ee.call,
        nodes: Ee.nodes,
        node: Ee.node,
        size: Ee.size,
        empty: Ee.empty,
        each: Ee.each,
        on: function (e, t) {
          var r = this._id;
          return arguments.length < 2
            ? k(this.node(), r).on.on(e)
            : this.each(
                (function (e, t, r) {
                  var n,
                    i,
                    a = (function (e) {
                      return (e + "")
                        .trim()
                        .split(/^|\s+/)
                        .every(function (e) {
                          var t = e.indexOf(".");
                          return (
                            t >= 0 && (e = e.slice(0, t)), !e || "start" === e
                          );
                        });
                    })(t)
                      ? D
                      : U;
                  return function () {
                    var o = a(this, e),
                      s = o.on;
                    s !== n && (i = (n = s).copy()).on(t, r), (o.on = i);
                  };
                })(r, e, t),
              );
        },
        attr: function (e, t) {
          var r = (0, K.Z)(e),
            n = "transform" === r ? G : ie;
          return this.attrTween(
            e,
            "function" == typeof t
              ? (r.local ? ue : ce)(r, n, ee(this, "attr." + e, t))
              : null == t
              ? (r.local ? oe : ae)(r)
              : (r.local ? le : se)(r, n, t),
          );
        },
        attrTween: function (e, t) {
          var r = "attr." + e;
          if (arguments.length < 2) return (r = this.tween(r)) && r._value;
          if (null == t) return this.tween(r, null);
          if ("function" != typeof t) throw new Error();
          var n = (0, K.Z)(e);
          return this.tween(r, (n.local ? de : fe)(n, t));
        },
        style: function (e, t, r) {
          var n = "transform" == (e += "") ? H : ie;
          return null == t
            ? this.styleTween(
                e,
                (function (e, t) {
                  var r, n, i;
                  return function () {
                    var a = (0, we.S)(this, e),
                      o = (this.style.removeProperty(e), (0, we.S)(this, e));
                    return a === o
                      ? null
                      : a === r && o === n
                      ? i
                      : (i = t((r = a), (n = o)));
                  };
                })(e, n),
              ).on("end.style." + e, _e(e))
            : "function" == typeof t
            ? this.styleTween(
                e,
                (function (e, t, r) {
                  var n, i, a;
                  return function () {
                    var o = (0, we.S)(this, e),
                      s = r(this),
                      l = s + "";
                    return (
                      null == s &&
                        (this.style.removeProperty(e),
                        (l = s = (0, we.S)(this, e))),
                      o === l
                        ? null
                        : o === n && l === i
                        ? a
                        : ((i = l), (a = t((n = o), s)))
                    );
                  };
                })(e, n, ee(this, "style." + e, t)),
              ).each(
                (function (e, t) {
                  var r,
                    n,
                    i,
                    a,
                    o = "style." + t,
                    s = "end." + o;
                  return function () {
                    var l = U(this, e),
                      c = l.on,
                      u = null == l.value[o] ? a || (a = _e(t)) : void 0;
                    (c === r && i === u) || (n = (r = c).copy()).on(s, (i = u)),
                      (l.on = n);
                  };
                })(this._id, e),
              )
            : this.styleTween(
                e,
                (function (e, t, r) {
                  var n,
                    i,
                    a = r + "";
                  return function () {
                    var o = (0, we.S)(this, e);
                    return o === a ? null : o === n ? i : (i = t((n = o), r));
                  };
                })(e, n, t),
                r,
              ).on("end.style." + e, null);
        },
        styleTween: function (e, t, r) {
          var n = "style." + (e += "");
          if (arguments.length < 2) return (n = this.tween(n)) && n._value;
          if (null == t) return this.tween(n, null);
          if ("function" != typeof t) throw new Error();
          return this.tween(
            n,
            (function (e, t, r) {
              var n, i;
              function a() {
                var a = t.apply(this, arguments);
                return (
                  a !== i &&
                    (n =
                      (i = a) &&
                      (function (e, t, r) {
                        return function (n) {
                          this.style.setProperty(e, t.call(this, n), r);
                        };
                      })(e, a, r)),
                  n
                );
              }
              return (a._value = t), a;
            })(e, t, null == r ? "" : r),
          );
        },
        text: function (e) {
          return this.tween(
            "text",
            "function" == typeof e
              ? (function (e) {
                  return function () {
                    var t = e(this);
                    this.textContent = null == t ? "" : t;
                  };
                })(ee(this, "text", e))
              : (function (e) {
                  return function () {
                    this.textContent = e;
                  };
                })(null == e ? "" : e + ""),
          );
        },
        textTween: function (e) {
          var t = "text";
          if (arguments.length < 1) return (t = this.tween(t)) && t._value;
          if (null == e) return this.tween(t, null);
          if ("function" != typeof e) throw new Error();
          return this.tween(
            t,
            (function (e) {
              var t, r;
              function n() {
                var n = e.apply(this, arguments);
                return (
                  n !== r &&
                    (t =
                      (r = n) &&
                      (function (e) {
                        return function (t) {
                          this.textContent = e.call(this, t);
                        };
                      })(n)),
                  t
                );
              }
              return (n._value = e), n;
            })(e),
          );
        },
        remove: function () {
          return this.on(
            "end.remove",
            (function (e) {
              return function () {
                var t = this.parentNode;
                for (var r in this.__transition) if (+r !== e) return;
                t && t.removeChild(this);
              };
            })(this._id),
          );
        },
        tween: function (e, t) {
          var r = this._id;
          if (((e += ""), arguments.length < 2)) {
            for (
              var n, i = k(this.node(), r).tween, a = 0, o = i.length;
              a < o;
              ++a
            )
              if ((n = i[a]).name === e) return n.value;
            return null;
          }
          return this.each((null == t ? Q : J)(r, e, t));
        },
        delay: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(("function" == typeof e ? me : he)(t, e))
            : k(this.node(), t).delay;
        },
        duration: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(("function" == typeof e ? pe : ye)(t, e))
            : k(this.node(), t).duration;
        },
        ease: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(
                (function (e, t) {
                  if ("function" != typeof t) throw new Error();
                  return function () {
                    U(this, e).ease = t;
                  };
                })(t, e),
              )
            : k(this.node(), t).ease;
        },
        easeVarying: function (e) {
          if ("function" != typeof e) throw new Error();
          return this.each(
            (function (e, t) {
              return function () {
                var r = t.apply(this, arguments);
                if ("function" != typeof r) throw new Error();
                U(this, e).ease = r;
              };
            })(this._id, e),
          );
        },
        end: function () {
          var e,
            t,
            r = this,
            n = r._id,
            i = r.size();
          return new Promise(function (a, o) {
            var s = { value: o },
              l = {
                value: function () {
                  0 == --i && a();
                },
              };
            r.each(function () {
              var r = U(this, n),
                i = r.on;
              i !== e &&
                ((t = (e = i).copy())._.cancel.push(s),
                t._.interrupt.push(s),
                t._.end.push(l)),
                (r.on = t);
            }),
              0 === i && a();
          });
        },
        [Symbol.iterator]: Ee[Symbol.iterator],
      };
      var Oe = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function (e) {
          return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
        },
      };
      function Fe(e, t) {
        for (var r; !(r = e.__transition) || !(r = r[t]); )
          if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
        return r;
      }
      (d.ZP.prototype.interrupt = function (e) {
        return this.each(function () {
          X(this, e);
        });
      }),
        (d.ZP.prototype.transition = function (e) {
          var t, r;
          e instanceof Se
            ? ((t = e._id), (e = e._name))
            : ((t = ze()),
              ((r = Oe).time = w()),
              (e = null == e ? null : e + ""));
          for (var n = this._groups, i = n.length, a = 0; a < i; ++a)
            for (var o, s = n[a], l = s.length, c = 0; c < l; ++c)
              (o = s[c]) && A(o, e, t, c, s, r || Fe(o, t));
          return new Se(n, this._parents, e, t);
        });
      const Re = (e) => () => e;
      function je(e, { sourceEvent: t, target: r, transform: n, dispatch: i }) {
        Object.defineProperties(this, {
          type: { value: e, enumerable: !0, configurable: !0 },
          sourceEvent: { value: t, enumerable: !0, configurable: !0 },
          target: { value: r, enumerable: !0, configurable: !0 },
          transform: { value: n, enumerable: !0, configurable: !0 },
          _: { value: i },
        });
      }
      function xe(e, t, r) {
        (this.k = e), (this.x = t), (this.y = r);
      }
      xe.prototype = {
        constructor: xe,
        scale: function (e) {
          return 1 === e ? this : new xe(this.k * e, this.x, this.y);
        },
        translate: function (e, t) {
          return (0 === e) & (0 === t)
            ? this
            : new xe(this.k, this.x + this.k * e, this.y + this.k * t);
        },
        apply: function (e) {
          return [e[0] * this.k + this.x, e[1] * this.k + this.y];
        },
        applyX: function (e) {
          return e * this.k + this.x;
        },
        applyY: function (e) {
          return e * this.k + this.y;
        },
        invert: function (e) {
          return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
        },
        invertX: function (e) {
          return (e - this.x) / this.k;
        },
        invertY: function (e) {
          return (e - this.y) / this.k;
        },
        rescaleX: function (e) {
          return e
            .copy()
            .domain(e.range().map(this.invertX, this).map(e.invert, e));
        },
        rescaleY: function (e) {
          return e
            .copy()
            .domain(e.range().map(this.invertY, this).map(e.invert, e));
        },
        toString: function () {
          return (
            "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
          );
        },
      };
      var Ce = new xe(1, 0, 0);
      function Te(e) {
        e.stopImmediatePropagation();
      }
      function We(e) {
        e.preventDefault(), e.stopImmediatePropagation();
      }
      function Pe(e) {
        return !((e.ctrlKey && "wheel" !== e.type) || e.button);
      }
      function Ie() {
        var e = this;
        return e instanceof SVGElement
          ? (e = e.ownerSVGElement || e).hasAttribute("viewBox")
            ? [
                [(e = e.viewBox.baseVal).x, e.y],
                [e.x + e.width, e.y + e.height],
              ]
            : [
                [0, 0],
                [e.width.baseVal.value, e.height.baseVal.value],
              ]
          : [
              [0, 0],
              [e.clientWidth, e.clientHeight],
            ];
      }
      function Ne() {
        return this.__zoom || Ce;
      }
      function Ae(e) {
        return (
          -e.deltaY *
          (1 === e.deltaMode ? 0.05 : e.deltaMode ? 1 : 0.002) *
          (e.ctrlKey ? 10 : 1)
        );
      }
      function De() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function Ue(e, t, r) {
        var n = e.invertX(t[0][0]) - r[0][0],
          i = e.invertX(t[1][0]) - r[1][0],
          a = e.invertY(t[0][1]) - r[0][1],
          o = e.invertY(t[1][1]) - r[1][1];
        return e.translate(
          i > n ? (n + i) / 2 : Math.min(0, n) || Math.max(0, i),
          o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o),
        );
      }
      function ke() {
        var e,
          t,
          r,
          a = Pe,
          s = Ie,
          l = Ue,
          d = Ae,
          f = De,
          m = [0, 1 / 0],
          h = [
            [-1 / 0, -1 / 0],
            [1 / 0, 1 / 0],
          ],
          p = 250,
          y = o,
          g = (0, n.Z)("start", "zoom", "end"),
          b = 500,
          v = 150,
          B = 0,
          w = 10;
        function _(e) {
          e.property("__zoom", Ne)
            .on("wheel.zoom", R, { passive: !1 })
            .on("mousedown.zoom", j)
            .on("dblclick.zoom", x)
            .filter(f)
            .on("touchstart.zoom", C)
            .on("touchmove.zoom", T)
            .on("touchend.zoom touchcancel.zoom", W)
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function M(e, t) {
          return (t = Math.max(m[0], Math.min(m[1], t))) === e.k
            ? e
            : new xe(t, e.x, e.y);
        }
        function S(e, t, r) {
          var n = t[0] - r[0] * e.k,
            i = t[1] - r[1] * e.k;
          return n === e.x && i === e.y ? e : new xe(e.k, n, i);
        }
        function z(e) {
          return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2];
        }
        function E(e, t, r, n) {
          e.on("start.zoom", function () {
            O(this, arguments).event(n).start();
          })
            .on("interrupt.zoom end.zoom", function () {
              O(this, arguments).event(n).end();
            })
            .tween("zoom", function () {
              var e = this,
                i = arguments,
                a = O(e, i).event(n),
                o = s.apply(e, i),
                l =
                  null == r ? z(o) : "function" == typeof r ? r.apply(e, i) : r,
                c = Math.max(o[1][0] - o[0][0], o[1][1] - o[0][1]),
                u = e.__zoom,
                d = "function" == typeof t ? t.apply(e, i) : t,
                f = y(u.invert(l).concat(c / u.k), d.invert(l).concat(c / d.k));
              return function (e) {
                if (1 === e) e = d;
                else {
                  var t = f(e),
                    r = c / t[2];
                  e = new xe(r, l[0] - t[0] * r, l[1] - t[1] * r);
                }
                a.zoom(null, e);
              };
            });
        }
        function O(e, t, r) {
          return (!r && e.__zooming) || new F(e, t);
        }
        function F(e, t) {
          (this.that = e),
            (this.args = t),
            (this.active = 0),
            (this.sourceEvent = null),
            (this.extent = s.apply(e, t)),
            (this.taps = 0);
        }
        function R(e, ...t) {
          if (a.apply(this, arguments)) {
            var r = O(this, t).event(e),
              n = this.__zoom,
              i = Math.max(
                m[0],
                Math.min(m[1], n.k * Math.pow(2, d.apply(this, arguments))),
              ),
              o = (0, u.Z)(e);
            if (r.wheel)
              (r.mouse[0][0] === o[0] && r.mouse[0][1] === o[1]) ||
                (r.mouse[1] = n.invert((r.mouse[0] = o))),
                clearTimeout(r.wheel);
            else {
              if (n.k === i) return;
              (r.mouse = [o, n.invert(o)]), X(this), r.start();
            }
            We(e),
              (r.wheel = setTimeout(function () {
                (r.wheel = null), r.end();
              }, v)),
              r.zoom(
                "mouse",
                l(S(M(n, i), r.mouse[0], r.mouse[1]), r.extent, h),
              );
          }
        }
        function j(e, ...t) {
          if (!r && a.apply(this, arguments)) {
            var n = e.currentTarget,
              o = O(this, t, !0).event(e),
              s = (0, c.Z)(e.view)
                .on(
                  "mousemove.zoom",
                  function (e) {
                    if ((We(e), !o.moved)) {
                      var t = e.clientX - f,
                        r = e.clientY - m;
                      o.moved = t * t + r * r > B;
                    }
                    o.event(e).zoom(
                      "mouse",
                      l(
                        S(
                          o.that.__zoom,
                          (o.mouse[0] = (0, u.Z)(e, n)),
                          o.mouse[1],
                        ),
                        o.extent,
                        h,
                      ),
                    );
                  },
                  !0,
                )
                .on(
                  "mouseup.zoom",
                  function (e) {
                    s.on("mousemove.zoom mouseup.zoom", null),
                      (0, i.D)(e.view, o.moved),
                      We(e),
                      o.event(e).end();
                  },
                  !0,
                ),
              d = (0, u.Z)(e, n),
              f = e.clientX,
              m = e.clientY;
            (0, i.Z)(e.view),
              Te(e),
              (o.mouse = [d, this.__zoom.invert(d)]),
              X(this),
              o.start();
          }
        }
        function x(e, ...t) {
          if (a.apply(this, arguments)) {
            var r = this.__zoom,
              n = (0, u.Z)(e.changedTouches ? e.changedTouches[0] : e, this),
              i = r.invert(n),
              o = r.k * (e.shiftKey ? 0.5 : 2),
              d = l(S(M(r, o), n, i), s.apply(this, t), h);
            We(e),
              p > 0
                ? (0, c.Z)(this).transition().duration(p).call(E, d, n, e)
                : (0, c.Z)(this).call(_.transform, d, n, e);
          }
        }
        function C(r, ...n) {
          if (a.apply(this, arguments)) {
            var i,
              o,
              s,
              l,
              c = r.touches,
              d = c.length,
              f = O(this, n, r.changedTouches.length === d).event(r);
            for (Te(r), o = 0; o < d; ++o)
              (s = c[o]),
                (l = [
                  (l = (0, u.Z)(s, this)),
                  this.__zoom.invert(l),
                  s.identifier,
                ]),
                f.touch0
                  ? f.touch1 ||
                    f.touch0[2] === l[2] ||
                    ((f.touch1 = l), (f.taps = 0))
                  : ((f.touch0 = l), (i = !0), (f.taps = 1 + !!e));
            e && (e = clearTimeout(e)),
              i &&
                (f.taps < 2 &&
                  ((t = l[0]),
                  (e = setTimeout(function () {
                    e = null;
                  }, b))),
                X(this),
                f.start());
          }
        }
        function T(e, ...t) {
          if (this.__zooming) {
            var r,
              n,
              i,
              a,
              o = O(this, t).event(e),
              s = e.changedTouches,
              c = s.length;
            for (We(e), r = 0; r < c; ++r)
              (n = s[r]),
                (i = (0, u.Z)(n, this)),
                o.touch0 && o.touch0[2] === n.identifier
                  ? (o.touch0[0] = i)
                  : o.touch1 &&
                    o.touch1[2] === n.identifier &&
                    (o.touch1[0] = i);
            if (((n = o.that.__zoom), o.touch1)) {
              var d = o.touch0[0],
                f = o.touch0[1],
                m = o.touch1[0],
                p = o.touch1[1],
                y = (y = m[0] - d[0]) * y + (y = m[1] - d[1]) * y,
                g = (g = p[0] - f[0]) * g + (g = p[1] - f[1]) * g;
              (n = M(n, Math.sqrt(y / g))),
                (i = [(d[0] + m[0]) / 2, (d[1] + m[1]) / 2]),
                (a = [(f[0] + p[0]) / 2, (f[1] + p[1]) / 2]);
            } else {
              if (!o.touch0) return;
              (i = o.touch0[0]), (a = o.touch0[1]);
            }
            o.zoom("touch", l(S(n, i, a), o.extent, h));
          }
        }
        function W(e, ...n) {
          if (this.__zooming) {
            var i,
              a,
              o = O(this, n).event(e),
              s = e.changedTouches,
              l = s.length;
            for (
              Te(e),
                r && clearTimeout(r),
                r = setTimeout(function () {
                  r = null;
                }, b),
                i = 0;
              i < l;
              ++i
            )
              (a = s[i]),
                o.touch0 && o.touch0[2] === a.identifier
                  ? delete o.touch0
                  : o.touch1 && o.touch1[2] === a.identifier && delete o.touch1;
            if (
              (o.touch1 &&
                !o.touch0 &&
                ((o.touch0 = o.touch1), delete o.touch1),
              o.touch0)
            )
              o.touch0[1] = this.__zoom.invert(o.touch0[0]);
            else if (
              (o.end(),
              2 === o.taps &&
                ((a = (0, u.Z)(a, this)),
                Math.hypot(t[0] - a[0], t[1] - a[1]) < w))
            ) {
              var d = (0, c.Z)(this).on("dblclick.zoom");
              d && d.apply(this, arguments);
            }
          }
        }
        return (
          (_.transform = function (e, t, r, n) {
            var i = e.selection ? e.selection() : e;
            i.property("__zoom", Ne),
              e !== i
                ? E(e, t, r, n)
                : i.interrupt().each(function () {
                    O(this, arguments)
                      .event(n)
                      .start()
                      .zoom(
                        null,
                        "function" == typeof t ? t.apply(this, arguments) : t,
                      )
                      .end();
                  });
          }),
          (_.scaleBy = function (e, t, r, n) {
            _.scaleTo(
              e,
              function () {
                return (
                  this.__zoom.k *
                  ("function" == typeof t ? t.apply(this, arguments) : t)
                );
              },
              r,
              n,
            );
          }),
          (_.scaleTo = function (e, t, r, n) {
            _.transform(
              e,
              function () {
                var e = s.apply(this, arguments),
                  n = this.__zoom,
                  i =
                    null == r
                      ? z(e)
                      : "function" == typeof r
                      ? r.apply(this, arguments)
                      : r,
                  a = n.invert(i),
                  o = "function" == typeof t ? t.apply(this, arguments) : t;
                return l(S(M(n, o), i, a), e, h);
              },
              r,
              n,
            );
          }),
          (_.translateBy = function (e, t, r, n) {
            _.transform(
              e,
              function () {
                return l(
                  this.__zoom.translate(
                    "function" == typeof t ? t.apply(this, arguments) : t,
                    "function" == typeof r ? r.apply(this, arguments) : r,
                  ),
                  s.apply(this, arguments),
                  h,
                );
              },
              null,
              n,
            );
          }),
          (_.translateTo = function (e, t, r, n, i) {
            _.transform(
              e,
              function () {
                var e = s.apply(this, arguments),
                  i = this.__zoom,
                  a =
                    null == n
                      ? z(e)
                      : "function" == typeof n
                      ? n.apply(this, arguments)
                      : n;
                return l(
                  Ce.translate(a[0], a[1])
                    .scale(i.k)
                    .translate(
                      "function" == typeof t ? -t.apply(this, arguments) : -t,
                      "function" == typeof r ? -r.apply(this, arguments) : -r,
                    ),
                  e,
                  h,
                );
              },
              n,
              i,
            );
          }),
          (F.prototype = {
            event: function (e) {
              return e && (this.sourceEvent = e), this;
            },
            start: function () {
              return (
                1 == ++this.active &&
                  ((this.that.__zooming = this), this.emit("start")),
                this
              );
            },
            zoom: function (e, t) {
              return (
                this.mouse &&
                  "mouse" !== e &&
                  (this.mouse[1] = t.invert(this.mouse[0])),
                this.touch0 &&
                  "touch" !== e &&
                  (this.touch0[1] = t.invert(this.touch0[0])),
                this.touch1 &&
                  "touch" !== e &&
                  (this.touch1[1] = t.invert(this.touch1[0])),
                (this.that.__zoom = t),
                this.emit("zoom"),
                this
              );
            },
            end: function () {
              return (
                0 == --this.active &&
                  (delete this.that.__zooming, this.emit("end")),
                this
              );
            },
            emit: function (e) {
              var t = (0, c.Z)(this.that).datum();
              g.call(
                e,
                this.that,
                new je(e, {
                  sourceEvent: this.sourceEvent,
                  target: _,
                  type: e,
                  transform: this.that.__zoom,
                  dispatch: g,
                }),
                t,
              );
            },
          }),
          (_.wheelDelta = function (e) {
            return arguments.length
              ? ((d = "function" == typeof e ? e : Re(+e)), _)
              : d;
          }),
          (_.filter = function (e) {
            return arguments.length
              ? ((a = "function" == typeof e ? e : Re(!!e)), _)
              : a;
          }),
          (_.touchable = function (e) {
            return arguments.length
              ? ((f = "function" == typeof e ? e : Re(!!e)), _)
              : f;
          }),
          (_.extent = function (e) {
            return arguments.length
              ? ((s =
                  "function" == typeof e
                    ? e
                    : Re([
                        [+e[0][0], +e[0][1]],
                        [+e[1][0], +e[1][1]],
                      ])),
                _)
              : s;
          }),
          (_.scaleExtent = function (e) {
            return arguments.length
              ? ((m[0] = +e[0]), (m[1] = +e[1]), _)
              : [m[0], m[1]];
          }),
          (_.translateExtent = function (e) {
            return arguments.length
              ? ((h[0][0] = +e[0][0]),
                (h[1][0] = +e[1][0]),
                (h[0][1] = +e[0][1]),
                (h[1][1] = +e[1][1]),
                _)
              : [
                  [h[0][0], h[0][1]],
                  [h[1][0], h[1][1]],
                ];
          }),
          (_.constrain = function (e) {
            return arguments.length ? ((l = e), _) : l;
          }),
          (_.duration = function (e) {
            return arguments.length ? ((p = +e), _) : p;
          }),
          (_.interpolate = function (e) {
            return arguments.length ? ((y = e), _) : y;
          }),
          (_.on = function () {
            var e = g.on.apply(g, arguments);
            return e === g ? _ : e;
          }),
          (_.clickDistance = function (e) {
            return arguments.length ? ((B = (e = +e) * e), _) : Math.sqrt(B);
          }),
          (_.tapDistance = function (e) {
            return arguments.length ? ((w = +e), _) : w;
          }),
          _
        );
      }
      xe.prototype;
    },
  },
]);
