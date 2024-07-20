import styles from "./page.module.css"
import Homepage from '@/components/homepage/Homepage';
import CategoryList from "@/components/categoryList/CategoryList";
import List from "@/components/list/List";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Homepage/>
      <CategoryList/>
      <div className={styles.content}>
        <List/>
        <Menu/>
      </div>
    </div>
  );
}
