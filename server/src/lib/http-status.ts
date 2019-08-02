// https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml

export const CONTINUE = 100;
export const SWITCHING_PROTOCOLS = 101;
export const PROCESSING = 102;
export const EARLY_HINTS = 103;

export const OK = 200;
export const CREATED = 201;
export const ACCEPTED = 202;
export const NON_AUTHORITATIVE_INFORMATION = 203;
export const NO_CONTENT = 204;
export const RESET_CONTENT = 205;
export const PARTIAL_CONTENT = 206;
export const MULTI_STATUS = 207;
export const ALREADY_REPORTED = 208;
export const IM_USED = 226;

export const MULTIPLE_CHOICES = 300;
export const MOVED_PERMANENTLY = 301;
export const FOUND = 302;
export const SEE_OTHER = 303;
export const NOT_MODIFIED = 304;
export const USE_PROXY = 305;
export const SWITCH_PROXY = 306;
export const TEMPORARY_REDIRECT = 307;
export const PERMANENT_REDIRECT = 308;

export const BAD_REQUEST = 400;
export const UNAUTHORIZED = 401;
export const PAYMENT_REQUIRED = 402;
export const FORBIDDEN = 403;
export const NOT_FOUND = 404;
export const METHOD_NOT_ALLOWED = 405;
export const NOT_ACCEPTABLE = 406;
export const PROXY_AUTHENTICATION_REQUIRED = 407;
export const REQUEST_TIMEOUT = 408;
export const CONFLICT = 409;
export const GONE = 410;
export const LENGTH_REQUIRED = 411;
export const PRECONDITION_FAILED = 412;
export const PAYLOAD_TOO_LARGE = 413;
export const URI_TOO_LONG = 414;
export const UNSUPPORTED_MEDIA_TYPE = 415;
export const RANGE_NOT_SATISFIABLE = 416;
export const EXPECTATION_FAILED = 417;
export const MISDIRECTED_REQUEST = 421;
export const UNPROCESSABLE_ENTITY = 422;
export const LOCKED = 423;
export const FAILED_DEPENDENCY = 424;
export const TOO_EARLY = 425;
export const UPGRADE_REQUIRED = 426;
export const PRECONDITION_REQUIRED = 428;
export const TOO_MANY_REQUESTS = 429;
export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
export const UNAVAILABLE_FOR_LEGAL_REASONS = 451;

export const INTERNAL_SERVER_ERROR = 500;
export const NOT_IMPLEMENTED = 501;
export const BAD_GATEWAY = 502;
export const SERVICE_UNAVAILABLE = 503;
export const GATEWAY_TIMEOUT = 504;
export const HTTP_VERSION_NOT_SUPPORTED = 505;
export const VARIANT_ALSO_NEGOTIATES = 506;
export const INSUFFICIENT_STORAGE = 507;
export const LOOP_DETECTED = 508;
export const NOT_EXTENDED = 510;
export const NETWORK_AUTHENTICATION_REQUIRED = 511;

export class HttpStatus {
  // ## Informational 1xx
  // Request received, continuing process.
  public static CONTINUE = Object.freeze(
    new HttpStatus(
      CONTINUE,
      'CONTINUE',
      'The initial part of a request has been received and has not yet been rejected by the server.  The server ' +
        'intends to send a final response after the request has been fully received and acted upon.',
    ),
  );
  public static SWITCHING_PROTOCOLS = Object.freeze(
    new HttpStatus(
      SWITCHING_PROTOCOLS,
      'SWITCHING_PROTOCOLS',
      "The server understands and is willing to comply with the client's request, via the Upgrade header field " +
        '(Section 6.7 of [RFC7230]), for a change in the application protocol being used on this connection.',
    ),
  );
  public static PROCESSING = Object.freeze(
    new HttpStatus(
      PROCESSING,
      'PROCESSING',
      'The server has accepted the complete request, but has not yet completed it.',
    ),
  );
  public static EARLY_HINTS = Object.freeze(
    new HttpStatus(
      EARLY_HINTS,
      'EARLY_HINTS',
      'The server is likely to send a final response with the header fields included in the informational response.',
    ),
  );

  // ## Successful 2xx
  // The action was successfully received, understood, and accepted.
  public static OK = Object.freeze(new HttpStatus(OK, 'OK', 'The request has succeeded.'));
  public static CREATED = Object.freeze(
    new HttpStatus(
      CREATED,
      'CREATED',
      'The request has been fulfilled and has resulted in one or more new resources being created.',
    ),
  );
  public static ACCEPTED = Object.freeze(
    new HttpStatus(
      ACCEPTED,
      'ACCEPTED',
      'The request has been accepted for processing, but the processing has not been completed.',
    ),
  );
  public static NON_AUTHORITATIVE_INFORMATION = Object.freeze(
    new HttpStatus(
      NON_AUTHORITATIVE_INFORMATION,
      'NON_AUTHORITATIVE_INFORMATION',
      "The request was successful but the enclosed payload has been modified from that of the origin server's " +
        '200 (OK) response by a transforming proxy (Section 5.7.2 of [RFC7230]).',
    ),
  );
  public static NO_CONTENT = Object.freeze(
    new HttpStatus(
      NO_CONTENT,
      'NO_CONTENT',
      'The server has successfully fulfilled the request and that there is no additional content to send in the ' +
        'response payload body.',
    ),
  );
  public static RESET_CONTENT = Object.freeze(
    new HttpStatus(
      RESET_CONTENT,
      'RESET_CONTENT',
      'The server has fulfilled the request and desires that the user agent reset the "document view", which ' +
        'caused the request to be sent, to its original state as received from the origin server.',
    ),
  );
  public static PARTIAL_CONTENT = Object.freeze(
    new HttpStatus(
      PARTIAL_CONTENT,
      'PARTIAL_CONTENT',
      'The server is successfully fulfilling a range request for the target resource',
    ),
  );
  public static MULTI_STATUS = Object.freeze(
    new HttpStatus(
      MULTI_STATUS,
      'MULTI_STATUS',
      'The 207 (Multi-Status) status code provides status for multiple independent operations',
    ),
  );
  public static ALREADY_REPORTED = Object.freeze(
    new HttpStatus(
      ALREADY_REPORTED,
      'ALREADY_REPORTED',
      'can be used inside a DAV: propstat response element to avoid enumerating the internal members of multiple ' +
        'bindings to the same collection repeatedly',
    ),
  );
  public static IM_USED = Object.freeze(
    new HttpStatus(
      IM_USED,
      'IM_USED',
      'The response is a representation of the result of one or more instance-manipulations applied to the current ' +
        'instance.',
    ),
  );

  // ## Redirection 3xx
  // Further action must be taken in order to complete the request.
  public static MULTIPLE_CHOICES = Object.freeze(
    new HttpStatus(
      MULTIPLE_CHOICES,
      'MULTIPLE_CHOICES',
      'The target resource has more than one representation, each with its own more specific identifier, and ' +
        'information about the alternatives is being provided so that the user (or user agent) can select a ' +
        'preferred representation by redirecting its request to one or more of those identifiers.',
    ),
  );
  public static MOVED_PERMANENTLY = Object.freeze(
    new HttpStatus(
      MOVED_PERMANENTLY,
      'MOVED_PERMANENTLY',
      'The target resource has been assigned a new permanent URI and any future references to this resource ' +
        'ought to use one of the enclosed URIs.',
    ),
  );
  public static FOUND = Object.freeze(
    new HttpStatus(FOUND, 'FOUND', 'The target resource resides temporarily under a different URI.'),
  );
  public static SEE_OTHER = Object.freeze(
    new HttpStatus(
      SEE_OTHER,
      'SEE_OTHER',
      'The server is redirecting the user agent to a different resource, as indicated by a URI in the Location ' +
        'header field',
    ),
  );
  public static NOT_MODIFIED = Object.freeze(
    new HttpStatus(
      NOT_MODIFIED,
      'NOT_MODIFIED',
      'A conditional GET or HEAD request has been received and would have resulted in a 200 (OK) response if it ' +
        'were not for the fact that the condition evaluated to false.',
    ),
  );
  public static USE_PROXY = Object.freeze(
    new HttpStatus(
      USE_PROXY,
      'USE_PROXY',
      'Status code was defined in a previous version of this specification and is now deprecated',
    ),
  );
  public static SWITCH_PROXY = Object.freeze(
    new HttpStatus(
      SWITCH_PROXY,
      'SWITCH_PROXY',
      'Status code was defined in a previous version of this specification and is now deprecated',
    ),
  );
  public static TEMPORARY_REDIRECT = Object.freeze(
    new HttpStatus(
      TEMPORARY_REDIRECT,
      'TEMPORARY_REDIRECT',
      'The target resource resides temporarily under a different URI and the user agent MUST NOT change the ' +
        'request method if it performs an automatic redirection to that URI.',
    ),
  );
  public static PERMANENT_REDIRECT = Object.freeze(
    new HttpStatus(
      PERMANENT_REDIRECT,
      'PERMANENT_REDIRECT',
      'The target resource has been assigned a new permanent URI and any future references to this resource ' +
        'ought to use one of the enclosed URIs.',
    ),
  );

  // ## Client Error 4xx
  // The request contains bad syntax or cannot be fulfilled.
  public static BAD_REQUEST = Object.freeze(
    new HttpStatus(
      BAD_REQUEST,
      'BAD_REQUEST',
      'The server cannot or will not process the request due to something that is perceived to be a client error ' +
        '(e.g., malformed request syntax, invalid request message framing, or deceptive request routing).',
    ),
  );
  public static UNAUTHORIZED = Object.freeze(
    new HttpStatus(
      UNAUTHORIZED,
      'UNAUTHORIZED',
      'The request has not been applied because it lacks valid authentication credentials for the target resource',
    ),
  );
  public static PAYMENT_REQUIRED = Object.freeze(
    new HttpStatus(PAYMENT_REQUIRED, 'PAYMENT_REQUIRED', 'reserved for future use'),
  );
  public static FORBIDDEN = Object.freeze(
    new HttpStatus(FORBIDDEN, 'FORBIDDEN', 'The server understood the request but refuses to authorize it'),
  );
  public static NOT_FOUND = Object.freeze(
    new HttpStatus(
      NOT_FOUND,
      'NOT_FOUND',
      'The origin server did not find a current representation for the target resource or is not willing to ' +
        'disclose that one exists',
    ),
  );
  public static METHOD_NOT_ALLOWED = Object.freeze(
    new HttpStatus(
      METHOD_NOT_ALLOWED,
      'METHOD_NOT_ALLOWED',
      'the method received in the request-line is known by the origin server but not supported by the target resource',
    ),
  );
  public static NOT_ACCEPTABLE = Object.freeze(
    new HttpStatus(
      NOT_ACCEPTABLE,
      'NOT_ACCEPTABLE',
      'The target resource does not have a current representation that would be acceptable to the user agent, ' +
        'according to the proactive negotiation header fields received in the request (Section 5.3), and the server ' +
        'is unwilling to supply a default representation.',
    ),
  );
  public static PROXY_AUTHENTICATION_REQUIRED = Object.freeze(
    new HttpStatus(
      PROXY_AUTHENTICATION_REQUIRED,
      'PROXY_AUTHENTICATION_REQUIRED',
      'indicates that the client needs to authenticate itself in order to use a proxy',
    ),
  );
  public static REQUEST_TIMEOUT = Object.freeze(
    new HttpStatus(
      REQUEST_TIMEOUT,
      'REQUEST_TIMEOUT',
      'The server did not receive a complete request message within the time that it was prepared to wait.',
    ),
  );
  public static CONFLICT = Object.freeze(
    new HttpStatus(
      CONFLICT,
      'CONFLICT',
      'The request could not be completed due to a conflict with the current state of the target resource. ',
    ),
  );
  public static GONE = Object.freeze(
    new HttpStatus(
      GONE,
      'GONE',
      'Access to the target resource is no longer available at the origin server and that this condition is likely ' +
        'to be permanent.',
    ),
  );
  public static LENGTH_REQUIRED = Object.freeze(
    new HttpStatus(
      LENGTH_REQUIRED,
      'LENGTH_REQUIRED',
      'The server refuses to accept the request without a defined Content-Length',
    ),
  );
  public static PRECONDITION_FAILED = Object.freeze(
    new HttpStatus(
      PRECONDITION_FAILED,
      'PRECONDITION_FAILED',
      'one or more conditions given in the request header fields evaluated to false when tested on the server.',
    ),
  );
  public static PAYLOAD_TOO_LARGE = Object.freeze(
    new HttpStatus(
      PAYLOAD_TOO_LARGE,
      'PAYLOAD_TOO_LARGE',
      'The server is refusing to process a request because the request payload is larger than the server is ' +
        'willing or able to process',
    ),
  );
  public static URI_TOO_LONG = Object.freeze(
    new HttpStatus(
      URI_TOO_LONG,
      'URI_TOO_LONG',
      'The server is refusing to service the request because the request-target (Section 5.3 of [RFC7230]) is ' +
        'longer than the server is willing to interpret',
    ),
  );
  public static UNSUPPORTED_MEDIA_TYPE = Object.freeze(
    new HttpStatus(
      UNSUPPORTED_MEDIA_TYPE,
      'UNSUPPORTED_MEDIA_TYPE',
      'The origin server is refusing to service the request because the payload is in a format not supported by ' +
        'this method on the target resource.',
    ),
  );
  public static RANGE_NOT_SATISFIABLE = Object.freeze(new HttpStatus(RANGE_NOT_SATISFIABLE, 'RANGE_NOT_SATISFIABLE'));
  public static EXPECTATION_FAILED = Object.freeze(
    new HttpStatus(
      EXPECTATION_FAILED,
      'EXPECTATION_FAILED',
      "the expectation given in the request's Expect header field (Section 5.1.1) could not be met by at least " +
        'one of the inbound servers.',
    ),
  );
  public static MISDIRECTED_REQUEST = Object.freeze(
    new HttpStatus(
      MISDIRECTED_REQUEST,
      'MISDIRECTED_REQUEST',
      'The request was directed at a server that is not able to produce a response.',
    ),
  );
  public static UNPROCESSABLE_ENTITY = Object.freeze(
    new HttpStatus(
      UNPROCESSABLE_ENTITY,
      'UNPROCESSABLE_ENTITY',
      'The server understands the content type of the request entity, and the syntax of the request entity is ' +
        'correct but was unable to process the contained instructions',
    ),
  );
  public static LOCKED = Object.freeze(
    new HttpStatus(LOCKED, 'LOCKED', 'The source or destination resource of a method is locked'),
  );
  public static FAILED_DEPENDENCY = Object.freeze(
    new HttpStatus(
      FAILED_DEPENDENCY,
      'FAILED_DEPENDENCY',
      'The method could not be performed on the resource because the requested action depended on another action ' +
        'and that action failed',
    ),
  );
  public static TOO_EARLY = Object.freeze(
    new HttpStatus(
      TOO_EARLY,
      'TOO_EARLY',
      'The server is unwilling to risk processing a request that might be replayed.',
    ),
  );
  public static UPGRADE_REQUIRED = Object.freeze(
    new HttpStatus(
      UPGRADE_REQUIRED,
      'UPGRADE_REQUIRED',
      'The server refuses to perform the request using the current protocol but might be willing to do so after ' +
        'the client upgrades to a different protocol.',
    ),
  );
  public static PRECONDITION_REQUIRED = Object.freeze(
    new HttpStatus(
      PRECONDITION_REQUIRED,
      'PRECONDITION_REQUIRED',
      'The origin server requires the request to be conditional.',
    ),
  );
  public static TOO_MANY_REQUESTS = Object.freeze(
    new HttpStatus(
      TOO_MANY_REQUESTS,
      'TOO_MANY_REQUESTS',
      'The user has sent too many requests in a given amount of time ("rate limiting").',
    ),
  );
  public static REQUEST_HEADER_FIELDS_TOO_LARGE = Object.freeze(
    new HttpStatus(
      REQUEST_HEADER_FIELDS_TOO_LARGE,
      'REQUEST_HEADER_FIELDS_TOO_LARGE',
      'The server is unwilling to process the request because its header fields are too large.',
    ),
  );
  public static UNAVAILABLE_FOR_LEGAL_REASONS = Object.freeze(
    new HttpStatus(UNAVAILABLE_FOR_LEGAL_REASONS, 'UNAVAILABLE_FOR_LEGAL_REASONS'),
  );

  // ## Server Error 5xx
  // The server failed to fulfill an apparently valid request.
  public static INTERNAL_SERVER_ERROR = Object.freeze(
    new HttpStatus(
      INTERNAL_SERVER_ERROR,
      'INTERNAL_SERVER_ERROR',
      'The server encountered an unexpected condition that prevented it from fulfilling the request.',
    ),
  );
  public static NOT_IMPLEMENTED = Object.freeze(
    new HttpStatus(
      NOT_IMPLEMENTED,
      'NOT_IMPLEMENTED',
      'The server does not support the functionality required to fulfill the request.',
    ),
  );
  public static BAD_GATEWAY = Object.freeze(
    new HttpStatus(
      BAD_GATEWAY,
      'BAD_GATEWAY',
      'The server, while acting as a gateway or proxy, received an invalid response from an inbound server ' +
        'it accessed while attempting to fulfill the request.',
    ),
  );
  public static SERVICE_UNAVAILABLE = Object.freeze(
    new HttpStatus(
      SERVICE_UNAVAILABLE,
      'SERVICE_UNAVAILABLE',
      'The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, ' +
        'which will likely be alleviated after some delay.  The server MAY send a Retry-After header field ' +
        '(Section 7.1.3) to suggest an appropriate amount of time for the client to wait before retrying the request.',
    ),
  );
  public static GATEWAY_TIMEOUT = Object.freeze(
    new HttpStatus(
      GATEWAY_TIMEOUT,
      'GATEWAY_TIMEOUT',
      'The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server ' +
        'it needed to access in order to complete the request.',
    ),
  );
  public static HTTP_VERSION_NOT_SUPPORTED = Object.freeze(
    new HttpStatus(
      HTTP_VERSION_NOT_SUPPORTED,
      'HTTP_VERSION_NOT_SUPPORTED',
      'The server does not support, or refuses to support, the major version of HTTP that was used in the request ' +
        'message.',
    ),
  );
  public static VARIANT_ALSO_NEGOTIATES = Object.freeze(
    new HttpStatus(
      VARIANT_ALSO_NEGOTIATES,
      'VARIANT_ALSO_NEGOTIATES',
      'The server has an internal configuration error: the chosen variant resource is configured to engage in ' +
        'transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.',
    ),
  );
  public static INSUFFICIENT_STORAGE = Object.freeze(
    new HttpStatus(
      INSUFFICIENT_STORAGE,
      'INSUFFICIENT_STORAGE',
      'The method could not be performed on the resource because the server is unable to store the representation ' +
        'needed to successfully complete the request.',
    ),
  );
  public static LOOP_DETECTED = Object.freeze(
    new HttpStatus(
      LOOP_DETECTED,
      'LOOP_DETECTED',
      'The server terminated an operation because it encountered an infinite loop while processing a request with ' +
        '"Depth: infinity".  This status indicates that the entire operation failed.',
    ),
  );
  public static NOT_EXTENDED = Object.freeze(
    new HttpStatus(NOT_EXTENDED, 'NOT_EXTENDED', 'The resource has not been met in the request.'),
  );
  public static NETWORK_AUTHENTICATION_REQUIRED = Object.freeze(
    new HttpStatus(
      NETWORK_AUTHENTICATION_REQUIRED,
      'NETWORK_AUTHENTICATION_REQUIRED',
      'The client needs to authenticate to gain network access.',
    ),
  );

  public static byCode(code: number): HttpStatus {
    const status = Object.values(HttpStatus).filter(v => v.code === code);
    return status[0];
  }

  public readonly code: number;
  public readonly name?: string;
  public message?: string;
  constructor(code: number, name?: string, message?: string) {
    if (!name && !message) {
      const status = HttpStatus.byCode(code);
      if (status) {
        this.code = 0; // Satisfy typescript compiler without making code nullable
        return status;
      }
    }

    this.code = code;
    this.name = name || code.toString();
    this.message = message || this.name;
  }
}

export default HttpStatus;
