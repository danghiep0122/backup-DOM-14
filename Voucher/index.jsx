import CommonLayout from '../../layouts/commonLayout/CommonLayout'
import styles from './styles.module.scss'

function Voucher() {
  return (
    <CommonLayout>
      <div className={styles.backgroundImage}>
        <div className={styles.boxBorder}>
          <div className={styles.contentWrapper}>
            <h4>Bạn có mã E-voucher tại Domino's Pizza?</h4>
            <h4>Nhập mã E-voucher của bạn ở khung dưới đây để được ưu đãi</h4>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="Your Voucher here" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  )
}

export default Voucher
