// https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
import { assert } from 'chai';
import 'mocha';
import * as http_status from './http-status';

describe('http-status.js', () => {
  it('Should have correct status codes', () => {
    assert.equal(http_status.CONTINUE, 100);
    assert.equal(http_status.SWITCHING_PROTOCOLS, 101);
    assert.equal(http_status.PROCESSING, 102);
    assert.equal(http_status.EARLY_HINTS, 103);

    assert.equal(http_status.OK, 200);
    assert.equal(http_status.CREATED, 201);
    assert.equal(http_status.ACCEPTED, 202);
    assert.equal(http_status.NON_AUTHORITATIVE_INFORMATION, 203);
    assert.equal(http_status.NO_CONTENT, 204);
    assert.equal(http_status.RESET_CONTENT, 205);
    assert.equal(http_status.PARTIAL_CONTENT, 206);
    assert.equal(http_status.MULTI_STATUS, 207);
    assert.equal(http_status.ALREADY_REPORTED, 208);
    assert.equal(http_status.IM_USED, 226);

    assert.equal(http_status.MULTIPLE_CHOICES, 300);
    assert.equal(http_status.MOVED_PERMANENTLY, 301);
    assert.equal(http_status.FOUND, 302);
    assert.equal(http_status.SEE_OTHER, 303);
    assert.equal(http_status.NOT_MODIFIED, 304);
    assert.equal(http_status.USE_PROXY, 305);
    assert.equal(http_status.TEMPORARY_REDIRECT, 307);
    assert.equal(http_status.PERMANENT_REDIRECT, 308);

    assert.equal(http_status.BAD_REQUEST, 400);
    assert.equal(http_status.UNAUTHORIZED, 401);
    assert.equal(http_status.PAYMENT_REQUIRED, 402);
    assert.equal(http_status.FORBIDDEN, 403);
    assert.equal(http_status.NOT_FOUND, 404);
    assert.equal(http_status.METHOD_NOT_ALLOWED, 405);
    assert.equal(http_status.NOT_ACCEPTABLE, 406);
    assert.equal(http_status.PROXY_AUTHENTICATION_REQUIRED, 407);
    assert.equal(http_status.REQUEST_TIMEOUT, 408);
    assert.equal(http_status.CONFLICT, 409);
    assert.equal(http_status.GONE, 410);
    assert.equal(http_status.LENGTH_REQUIRED, 411);
    assert.equal(http_status.PRECONDITION_FAILED, 412);
    assert.equal(http_status.PAYLOAD_TOO_LARGE, 413);
    assert.equal(http_status.URI_TOO_LONG, 414);
    assert.equal(http_status.UNSUPPORTED_MEDIA_TYPE, 415);
    assert.equal(http_status.RANGE_NOT_SATISFIABLE, 416);
    assert.equal(http_status.EXPECTATION_FAILED, 417);
    assert.equal(http_status.MISDIRECTED_REQUEST, 421);
    assert.equal(http_status.UNPROCESSABLE_ENTITY, 422);
    assert.equal(http_status.LOCKED, 423);
    assert.equal(http_status.FAILED_DEPENDENCY, 424);
    assert.equal(http_status.TOO_EARLY, 425);
    assert.equal(http_status.UPGRADE_REQUIRED, 426);
    assert.equal(http_status.PRECONDITION_REQUIRED, 428);
    assert.equal(http_status.TOO_MANY_REQUESTS, 429);
    assert.equal(http_status.REQUEST_HEADER_FIELDS_TOO_LARGE, 431);
    assert.equal(http_status.UNAVAILABLE_FOR_LEGAL_REASONS, 451);

    assert.equal(http_status.INTERNAL_SERVER_ERROR, 500);
    assert.equal(http_status.NOT_IMPLEMENTED, 501);
    assert.equal(http_status.BAD_GATEWAY, 502);
    assert.equal(http_status.SERVICE_UNAVAILABLE, 503);
    assert.equal(http_status.GATEWAY_TIMEOUT, 504);
    assert.equal(http_status.HTTP_VERSION_NOT_SUPPORTED, 505);
    assert.equal(http_status.VARIANT_ALSO_NEGOTIATES, 506);
    assert.equal(http_status.INSUFFICIENT_STORAGE, 507);
    assert.equal(http_status.LOOP_DETECTED, 508);
    assert.equal(http_status.NOT_EXTENDED, 510);
    assert.equal(http_status.NETWORK_AUTHENTICATION_REQUIRED, 511);
  });
  describe('HttpStatus', () => {
    describe('public static constants', () => {
      it('Should have name equal to constant Example: CONTINUE: { name: "CONTINUE" }', () => {
        Object.keys(http_status.HttpStatus).forEach(k => {
          const obj: any = http_status.HttpStatus;
          assert.equal(k, obj[k].name);
        });
      });
      it('Should not allow constants to be modified', () => {
        Object.values(http_status.HttpStatus).forEach(status => {
          if (status instanceof http_status.HttpStatus) {
            const obj: any = status;
            assert.throws(() => {
              obj.code = 0;
            });
            assert.throws(() => {
              obj.name = '';
            });
            assert.throws(() => {
              obj.message = '';
            });
          }
        });
      });
    });
    describe('constructor()', () => {
      it('Should return singleton instance given code', () => {
        const status = new http_status.HttpStatus(http_status.NOT_FOUND);
        assert.equal(status, http_status.HttpStatus.NOT_FOUND);
      });
      it('Should set name field if one not provided', () => {
        const status = new http_status.HttpStatus(1);
        assert.equal(status.code, 1);
        assert.equal(status.name, '1');
      });
      it('Should create custom status if all fields passed', () => {
        const status = new http_status.HttpStatus(404, '404', '404 message');
        assert.equal(status.code, 404);
        assert.equal(status.name, '404');
        assert.equal(status.message, '404 message');
      });
    });
    describe('public static byCode(code: number): HttpStatus', () => {
      it('Should return correct status based on number', () => {
        assert.equal(http_status.HttpStatus.byCode(http_status.NOT_FOUND).code, 404);
      });
      it('Should return singleton instance of code', () => {
        const status = http_status.HttpStatus.byCode(http_status.NOT_FOUND);
        assert.equal(status, http_status.HttpStatus.NOT_FOUND);
      });
    });
  });
});
