# Example AirOrange App

This small example application uses our AirOrange design system to demonstrate the [adoption features in zeroheight](https://zeroheight.com/help/article/adoption-private-beta-overview/).

- [Package version monitoring](https://zeroheight.com/help/article/package-version-monitoring/), which checks the [package-lock.json](https://github.com/zh-ski/example-airorange-app/blob/master/package-lock.json) and compares the design system dependencies against the design system packages
- [Component usage tracking](https://zeroheight.com/help/article/component-usage/), which analyzes the components, compares them against the design system components package and measures their usage. This can be done manually or in deployment workflows, such as [GitHub Actions as shown here](https://github.com/zh-ski/example-airorange-app/blob/master/.github/workflows/deploy.yaml)


## Installation
1. `git clone git@github.com:zeroheight/example-airorange-app.git`
2. `npm install`
3. `npm run dev`

### Previews and builds

can be done with `npm run preview` and `npm run build` respectively.
