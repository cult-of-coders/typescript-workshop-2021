/**
 * MAPS
 */
const ages: {
  [key: string]: number;
} = {
  John: 30,
  David: 50,
  TzancaUraganu: 30,
};

interface IDataBaseConfig {
  // @ts-expect-error
  // because `uri` it's not a number in the signature
  uri: string;
  [key: string]: number;
}

// how can we do it in such a way that we have uri as string, and any other key as number?

interface IBaseConfig {
  uri: string;
}

interface IExtendedConfig extends IBaseConfig {
  // @ts-expect-error
  [key: string]: number;
}

// ^ Not stupid

// the solution is to leave them as unknown especially since you have no idea how that config may look like
interface IDataBaseConfig2 {
  uri: string;
  [key: string]: unknown;
}

// the problem with types will happen when you're using it below
type DataBaseConfig2 = { uri: string } & {
  [key: string]: number;
};

// @ts-expect-error
const config: DataBaseConfig2 = {
  uri: "123",
  a: 123,
};

/**
 * TREES
 */
interface NestedCSS {
  color?: string;
  [selector: string]: string | NestedCSS | unknown;
}

const example: NestedCSS = {
  color: "red",
  ".subclass": {
    color: "blue",
    ".othersubclass": {
      color: "pink",
      asfasf: {
        color: "abc",
      },
    },
  },
};
