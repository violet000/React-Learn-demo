### 借助第三方库: classnames
    使用classnames动态的添加class
    
    classnames('foo', 'bar')   => 'foo bar'
    classnames('foo', { bar: true }) => 'foo bar'
    classnames({ 'foo-bar': true }) => 'foo-bar'
    classnames({ 'foo-bar': false }) => ''
    classnames({ foo: true }, { bar: true }) => 'foo bar'
    classnames({ foo: true, bar: true }) => 'foo bar'
    classnames('foo', { bar: true, duck: false }, 'baz', { quux: true }) => 'foo bar baz quux'
    classnames(null, false, 'bar', undefined, 0, 1, { baz: null }, '') => 'bar 1'
