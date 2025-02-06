import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        M SHEETAL KUMAR
      </h1>
      <p className="mb-4">
        {`Data-Driven Insights Enthusiast | Eager to Transform Raw Data into Actionable Business Solutions with SQL, Python, and Visualization Tools". `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
