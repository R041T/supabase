import styles from './ticket-info.module.css'
import cn from 'classnames'
import { DATE, SITE_URL } from '~/lib/constants'

const siteUrl = new URL(SITE_URL)
const siteUrlForTicket = `${siteUrl.host}${siteUrl.pathname}`.replace(/\/$/, '')

export default function TicketInfo({
  logoTextSecondaryColor = 'var(--accents-5)',
  golden = false,
}) {
  return (
    <div className={styles.info}>
      <div className={`${cn(styles.date, { [styles['date-golden']]: golden })} text-sm`}>
        <div>{DATE}</div>
      </div>
      {/* <div className={cn(styles.url, { [styles['url-golden']]: golden })}>{siteUrlForTicket}</div> */}
    </div>
  )
}
