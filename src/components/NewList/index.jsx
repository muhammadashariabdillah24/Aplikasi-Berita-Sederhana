import PropTypes from 'prop-types';
import styles from './NewList.module.css';
import NewsCard from '../NewsCard';

const NewList = ({ articles }) => {
    return (
        <div className={styles.newsList}>
            {articles.map((article, index, arr) => {

                // Jika gambar / artikel / authornya tidak ada atau bernilai null
                // maka akan mereturn null
                if (!article.urlToImage || !article.author || !article.content) {
                    return null
                }

                return (
                    <NewsCard 
                        key={index}
                        src={article.urlToImage}
                        title={article.title}
                        publishedAt={article.publishedAt}
                        author={article.author}
                        sourceName={article.source.name}
                        description={article.description}
                        url={article.url}
                        // Jika dia tidak berada diindex terakhir atau bukan komponen terakhir
                        // 
                        notLastChild={!(arr.length === index + 1)}
                    />
                )
            })}
        </div>
    )
}

NewList.propTypes = {
    articles: PropTypes.array
}

export default NewList