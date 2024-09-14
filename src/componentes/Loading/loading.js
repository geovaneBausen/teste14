import styles from "./loading.module.css"
import { Icon } from "@iconify/react";
function Loading() {
  return <Icon icon="line-md:loading-alt-loop" className={styles.iconeLoading} />
}

export default Loading;
