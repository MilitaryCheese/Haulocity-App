import React, { Component } from "react";

import SearchFilter from "./SearchFilter";
import Catalog from "./Catalog";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  headerArea: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "12px",
  },
  headerTypography: {
    fontWeight: "600",
  },
  catalog: {
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

class CatalogArea extends Component {
  render() {
    const productList = [
      {
        productId: "5f0b15e92af1771cc62a572e",
        productName: "Lupton",
        price: "2,649.6800",
        imgUrls: ["http://placehold.it/32x32", "http://placehold.it/32x32", "http://placehold.it/32x32"],
        description: "Deserunt ipsum adipisicing enim eiusmod culpa ex aliquip ut voluptate cupidatat nulla. Proident pariatur esse irure proident adipisicing nisi cupidatat aliquip amet mollit. Voluptate mollit dolore adipisicing eiusmod qui consequat laboris cillum pariatur labore irure. Dolor in voluptate non duis velit incididunt adipisicing id culpa magna ad amet consectetur. Cillum velit voluptate nostrud consectetur ea sit id dolor minim. Lorem eu proident enim ad exercitation excepteur excepteur labore aliquip ea cillum duis duis adipisicing. Lorem sint consectetur ex excepteur dolor nulla excepteur officia adipisicing.\r\n",
        type: "mountain-bike",
        tags: ["culpa", "excepteur", "commodo"],
        colors: ["red", "pink", "brown"],
      },
      {
        productId: "5f0b15e92348a5299585d1c4",
        productName: "Turpin",
        price: "2,816.7900",
        imgUrls: ["http://placehold.it/32x32", "http://placehold.it/32x32", "http://placehold.it/32x32"],
        description: "Labore tempor esse dolore eu do anim quis cillum velit ea consequat deserunt proident irure. Laboris commodo aliqua tempor labore do esse nulla sit. Incididunt esse Lorem commodo sunt. Dolore deserunt enim cupidatat laborum nisi deserunt et.\r\n",
        type: "road-bike",
        tags: ["excepteur", "exercitation", "quis"],
        colors: ["brown", "green", "pink"],
      },
      {
        productId: "5f0b15e95c5cf73e77e44963",
        productName: "Eggertsville",
        price: "3,892.6800",
        imgUrls: ["http://placehold.it/32x32", "http://placehold.it/32x32", "http://placehold.it/32x32"],
        description: "Eiusmod ea labore velit deserunt. Eu sit ipsum nisi irure consectetur ut magna qui excepteur culpa nostrud. Nisi eu esse labore aliquip dolor aliquip dolor labore ut veniam nulla eiusmod anim.\r\n",
        type: "mountain-bike",
        tags: ["incididunt", "anim", "ullamco"],
        colors: ["red", "brown", "green"],
      },
      {
        productId: "5f0b15e9fbf674a0ea05e777",
        productName: "Bordelonville",
        price: "3,114.6700",
        imgUrls: ["http://placehold.it/32x32", "http://placehold.it/32x32", "http://placehold.it/32x32"],
        description: "Et sunt do sunt ullamco nostrud aliquip deserunt pariatur. Non elit quis minim mollit est. Non dolor id officia est commodo laborum et adipisicing do do in. Mollit cillum eu do ea nisi mollit anim duis excepteur Lorem nulla sunt adipisicing do. Occaecat labore ullamco commodo fugiat exercitation amet id sint officia aliqua amet reprehenderit. Voluptate proident sint sunt velit culpa dolore. Minim in dolor ipsum ullamco laborum deserunt adipisicing excepteur esse nostrud.\r\n",
        type: "mountain-bike",
        tags: ["culpa", "consequat", "laborum"],
        colors: ["blue", "brown", "green"],
      },
      {
        productId: "5f0b15e9cf74cd4e4d5b462e",
        productName: "Farmington",
        price: "1,284.4700",
        imgUrls: ["http://placehold.it/32x32", "http://placehold.it/32x32", "http://placehold.it/32x32"],
        description: "Incididunt pariatur quis tempor eu consectetur do id aliquip incididunt eiusmod voluptate. Officia laboris sunt aliqua cupidatat consectetur exercitation mollit. Sunt laboris incididunt adipisicing Lorem ullamco est exercitation. Esse velit non eiusmod velit duis sint ullamco eu cupidatat non Lorem aliqua id. Dolore eu nulla et commodo Lorem.\r\n",
        type: "mountain-bike",
        tags: ["sit", "laborum", "nulla"],
        colors: ["red", "green", "pink"],
      },
    ];
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.headerArea}>
          <Typography variant="h5" className={classes.headerTypography}>
            Mountain Bikes
          </Typography>
          <SearchFilter />
        </div>
        <Catalog className={classes.catalog} products={productList} />
      </div>
    );
  }
}

export default withStyles(styles)(CatalogArea);
