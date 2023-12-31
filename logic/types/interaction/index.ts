/**
 * This file was automatically generated by joi-to-typescript
 * Do not modify this file manually
 */

export interface createInteraction {
  body: {
    description: string;
    name: string;
    request: {
      method: string;
      params?: {
        /**
         * Unknown Property
         */
        [x: string]: unknown;
      };
      query?: {
        /**
         * Unknown Property
         */
        [x: string]: unknown;
      };
      url: string;
    };
  };
  query?: {
    name?: string;
  };
}

export interface deleteInteraction {
  query: {
    name: string;
  };
}

export interface getInteraction {
  query: {
    name: string;
  };
}

export interface getInteractions {
  query: {
    name?: string;
  };
}

export interface interaction {
  description: string;
  name: string;
  request: {
    method: string;
    params?: {
      /**
       * Unknown Property
       */
      [x: string]: unknown;
    };
    query?: {
      /**
       * Unknown Property
       */
      [x: string]: unknown;
    };
    url: string;
  };
}

export interface interactionWithoutRequire {
  description?: string;
  name?: string;
  request?: {
    method: string;
    params?: {
      /**
       * Unknown Property
       */
      [x: string]: unknown;
    };
    query?: {
      /**
       * Unknown Property
       */
      [x: string]: unknown;
    };
    url: string;
  };
}

export interface param {
  default: any;
  description: string;
  required: boolean;
  type: string;
}

export interface query {
  name: string;
}

export interface queryAll {
  name?: string;
}

export interface request {
  method: string;
  params?: {
    /**
     * Unknown Property
     */
    [x: string]: unknown;
  };
  query?: {
    /**
     * Unknown Property
     */
    [x: string]: unknown;
  };
  url: string;
}

export interface updateInteraction {
  body: {
    description?: string;
    name?: string;
    request?: {
      method: string;
      params?: {
        /**
         * Unknown Property
         */
        [x: string]: unknown;
      };
      query?: {
        /**
         * Unknown Property
         */
        [x: string]: unknown;
      };
      url: string;
    };
  };
  query: {
    name: string;
  };
}
