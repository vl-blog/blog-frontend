import styles from './BlogSectionItem.module.scss';

const BlogSectionItem = () => {
  return (
    <div className={styles.Item}>
      <img
        className={styles.ItemImage}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
        alt='image'
      />
      <div className={styles.ItemTitle}>
        Odio ipsum at rhoncus, in enim eu leo lacus nam
      </div>
      <div className={styles.ItemTime}>1 hour ago</div>
    </div>
  );
};

export default BlogSectionItem;
