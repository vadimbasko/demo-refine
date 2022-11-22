# demo-refine

<div align="center" style="margin: 30px;">
    <a href="https://refine.dev">
    <img src="https://refine.ams3.cdn.digitaloceanspaces.com/refine_logo.png"  align="center" />
    </a>
</div>
<br/>

This [refine](https://github.com/pankod/refine) project was generated with [superplate](https://github.com/pankod/refine).

## Getting Started

**refine** is a React-based framework for building data-intensive applications in no time ✨

Refine offers lots of out-of-the box functionality for rapid development, without compromising extreme customizability. Use-cases include, but are not limited to admin panels, B2B applications and dashboards.

## Available Scripts

### Running the development server.

```bash
    npm run dev
```

### Building for production.

```bash
    npm run build
```

### Running the production server.

```bash
    npm run start
```

## Learn More

To learn more about **refine**, please check out the [Documentation](https://refine.dev/docs)

- **Ant Design** [Docs](https://refine.dev/docs/ui-frameworks/antd/tutorial/)
- **React Router** [Docs](https://refine.dev/docs/core/providers/router-provider/)
- **GraphQL Data Provider** [Docs](https://refine.dev/docs/core/providers/data-provider/#overview)
- **Custom Auth Provider** [Docs](https://refine.dev/docs/core/providers/auth-provider/)
- **i18n** [Docs](https://refine.dev/docs/core/providers/i18n-provider/)


## License

MIT

## Creation History

### Step 1

✔ Package manager: › Npm <br>
✔ Select your project type › refine-react <br>
✔ What will be the name of your app · demo-refine <br>
✔ Do you want to use a UI Framework?: · antd <br>
✔ Do you want a customized theme?: · antd-css <br>
✔ Router Provider: · react-router-v6 <br>
✔ Data Provider: · data-provider-graphql <br>
✔ Auth Provider: · auth-provider-custom <br>
✔ Do you want a customized layout? · no <br>
✔ Do you want to add Kbar command palette: · no <br>
✔ i18n - Internationalization: · i18n-antd <br>
✔ Would you like to share your choices with us anonymously? › No <br>

### Step 2 - Custom Login Page

Login page from [tutorial](https://refine.dev/blog/simple-web-application-with-refine/#login-page).

### Step 3 - Auth

AuthProvider customized, react app proxy added.

``` npm install axios qs http-proxy-middleware --save```<br>

### Step 4 - Connection with API

Show list of company names using `useCustom` Refine hook.

```typescript
  const metaData: MetaDataQuery = {
    operation: "companyList",
    fields: [
      "name"
    ],
  };

  const { data } = useCustom<Array<ICompany>>({
    url: '',
    method: 'get',
    metaData
  });
```
