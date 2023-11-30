// index.js
Page({
  data: {
    source1: {
      key1: 1000,
      key2: 'Hello World',
      key3: true,
      key4: { childrenStr: 'child Object', childrenNum: 3000, childrenBool: true },
      key5: [ 'Array item', 5000, false ],
      key6: [ 1, 2, '3', false, {
        arr: [
          { id: '1001', value: 1001 },
          { id: '1005', value: '1005' }
        ],
        obj: {
          a1: 111,
          a2: 'a2',
          a3: ['bool', true]
        },
        noData: null
      }],
    },
    source2: {
      json: {
        id: '1',
        jsonStr: JSON.stringify({
          id: 'id1',
          childJSON: JSON.stringify([
            { key: 'key1', value: 'value1' },
            { key: 'key2', value: 'value2' },
            { key: 'key3', value: 'value3' },
            { key: 'key4', value: 'value4' },
            { key: 'key5', value: 'value5' }
          ]),
          email: '13361339015@sina.com',
        })
      },
      [JSON.stringify([{id: 1}, {id: 2}, {id: 3}])]: true,
      pattern: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.toString(),
      '/': {
        '/arr/': ['.', '^', '+', '-', '|', '_'],
        spec: {
          'd+': '\.\d*',
          '\'': ',.*',
          '\\\\////': { '\\bfn': '\\u13fe5' }
        }
      },
      '\\"': '\\"'
    }
  }
})
