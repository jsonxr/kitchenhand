import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { listRecipes } from '../../store/recipes/actions';
import { Recipe } from '../../store/recipes/models';

import GridList from './GridList';
import { default as RecipeCard } from './RecipeCard';
import { default as RecipeToolbar } from './RecipeToolbar';
import useStyles from './RecipesPage.styles';

import mockData from './data';

interface Props {
  recipes?: Recipe[];
  listRecipes: typeof listRecipes;
}

interface RecipeListComponentProps {
  products: any;
}
const RecipeListComponent = (props: RecipeListComponentProps) => {
  const classes = useStyles({});
  const { products } = props;
  return (
    <div className={classes.root}>
      <RecipeToolbar />
      <div className={classes.content}>
        <GridList index="0" total="10">
          {products.map((product: any) => (
            <RecipeCard
              key={product.id}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              totalDownloads={product.totalDownloads}
            />
          ))}
        </GridList>
      </div>
    </div>
  );
};

class RecipeList extends React.Component<Props> {
  componentDidMount() {
    this.props.listRecipes();
  }

  render() {
    const products = mockData;
    return <RecipeListComponent products={products} />;
  }
}

const mapStateToProps = (state: AppState): Props => ({
  recipes: state.recipes.data,
  listRecipes,
});

export default connect(
  mapStateToProps,
  { listRecipes }
)(RecipeList);
