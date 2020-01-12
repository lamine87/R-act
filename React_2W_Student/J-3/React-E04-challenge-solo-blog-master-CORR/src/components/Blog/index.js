/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// Styles et assets
import './blog.sass';

// Données
import categories from 'src/data/categories';
import posts from 'src/data/posts';

/**
 * Code
 */
class Blog extends React.Component {
  state = {
    selectedCategory: 'Angular'
  }

  // On définit le callback qui va réagir aux clics sur les menus/catégories.
  // Dans l'idée, on aimerait :
  //   this.state.posts = this.state.posts.filter(...); // 1. modifier les données
  //   const resultat = this.render(); // 2. refresh avec ces données modifiées
  // mais ce n'est pas si simple => il faut utiliser this.setState
  handleClick = (category) => {
    console.log(this, category);
    return () => {
      this.setState({
        selectedCategory: category
      });
    }
  }

  render() {
    // FIXME: comment faire pour ne pas avoir de catégorie par défaut explicite
    // (genre 'Angular') et du coup, afficher par défaut *tous* les posts ?
    const filteredPosts = posts.filter(post => {
      return post.category === this.state.selectedCategory;
    });
    return (
      <div className="blog">
        <Header className="test-de-classe" axel={categories} reactToClick={this.handleClick} />
        <Posts posts={filteredPosts} />
        <Footer />
      </div>
    );
  }
}

/**
 * Export
 */
export default Blog;
