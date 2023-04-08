import DateFormatter from './date-formatter'
import CoverImage from './cover-image'

type Props = {
  title: string
  coverImage: string
  date: string
}

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
    <h1 className="text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left text-neutral-800 dark:text-neutral-200">
      {title}
    </h1>
      <div className="mb-8 md:mb-16 sm:mx-0 max-w-2xl mx-auto">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg text-neutral-800 dark:text-neutral-200">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
