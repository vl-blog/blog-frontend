import { FC } from 'react';
import styles from './BlogSection.module.scss';
import BlogSectionItem from './components/BlogSectionItem/BlogSectionItem';

interface IBlogSectionProps {
  title: string;
}

const BlogSection: FC<IBlogSectionProps> = ({ title }) => {
  return (
    <section className={styles.BlogSection}>
      <div className={styles.Container}>
        <div className={styles.Header}>
          <div className={styles.Top}>
            <h3 className={styles.Title}>{title}</h3>
          </div>
          <div className={styles.Divider} />
        </div>
        <div className={styles.Grid}>
          <BlogSectionItem />
          <BlogSectionItem />
          <BlogSectionItem />
          <BlogSectionItem />
          <BlogSectionItem />
          <BlogSectionItem />
          <BlogSectionItem />
          <BlogSectionItem />
          <BlogSectionItem />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
