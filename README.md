# shopify-theme-dev

For studying and testing Shopify theme development.

### How do I get set up?

In order to connect to Shopify, you will need to create a **config.yml** file.

It should contain references to the **development**, **production**, and if necessary, **test** store.
Each configuration can be [specific to the environment](https://shopify.github.io/themekit/configuration/).

Here is an example of the **config.yml** file contents.

```yml
development:
  password: [your-api-password]
  theme_id: "[your-theme-id]"
  store: [your-store].myshopify.com
production:
  password: [your-api-password]
  theme_id: "[your-theme-id]"
  store: [your-store].myshopify.com
test:
  password: [your-api-password]
  theme_id: "[your-theme-id]"
  store: [your-store].myshopify.com
```

The minimum required values for each environment:

- password (in the Shopify Store under Apps->Manage Private Apps)
- theme_id (created when **new** command is run)

  ```bash
  # add a new theme to the store
  theme new --password=[your-api-password] --store=[your-store.myshopify.com] --name="Cool Theme Name"

  # to verify the theme_id
  # get a list of all installed themes
  theme get --list -p=[your-api-password] -s=[your-store.myshopify.com]
  ```

- store (the url for the store without protocol)

### Development

#### Theme Structure

- /assets: CSS, JS, font libraries, images (all assets that are requested using: **asset_url** )
- /layout/theme.liquid: master layout file
- /snippets: reusable blocks of code that can be requested using **render**
- /dev: contains SCSS files to be compiled into 2 css files in the assets directory (style.css and style.min.css)

#### Gulp

This theme uses Gulp to convert the SCSS files in the **/dev/scss** directory to a /assets/style.css and /assets/style.min.css

To get started, run the following:

```bash
npm install
```

Once all the dependencies have been installed, you can run the following commands:

```bash
# compile files
gulp

# watch for changes and compile
gulp watch
```

### Commands

```bash
# deploy theme to Shopify development store
theme deploy

# deploy theme to Shopify production store
theme deploy --env=production

# deploy a single file
theme deploy templates/product.liquid

# deploy a single file to the production site
theme deploy --env=production assets/application.js

# deploy a few files
theme deploy templates/product.liquid assets/style.css

# watch for changes and upload
theme watch
```

### Resources

- [Shopify Theme Kit](https://shopify.github.io/themekit/)
- [Theme Customization - The Settings File](http://www.codeshopify.com/blog_posts/theme-customization-the-settings-file)
- [An Overview of Liquid: Shopify's Templating Language](https://www.shopify.com.ph/partners/blog/115244038-an-overview-of-liquid-shopifys-templating-language)
- [Shopify Cheat Sheet](https://www.shopify.com.ph/partners/shopify-cheat-sheet)
- [Zapiet - Liquid variable reference guide](https://zapiet.freshdesk.com/en/support/solutions/articles/60000607039-liquid-variable-reference-guide)




