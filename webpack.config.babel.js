import jsxobj from 'jsxobj';

// example of an imported plugin
const CustomPlugin = config => ({
  ...config,
  name: 'custom-plugin'
});

export default (
  <webpack target="web" watch mode="production">
    <entry path="src/index.js" />
    <resolve>
      <alias {...{
        react: 'preact-compat',
        'react-dom': 'preact-compat'
      }} />
    </resolve>
    <plugins>
      <uglify-js opts={{
        compression: true,
        mangle: false
      }} />
      <CustomPlugin foo="bar" />
    </plugins>
  </webpack>
);