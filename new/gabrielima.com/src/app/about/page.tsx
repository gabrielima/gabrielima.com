export default function AboutPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          About me
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          I'm a software engineer with 10+ years of experience in the field.
          I've worked with a wide range of technologies, from embedded systems
          to web development. I'm currently working as a Senior Software
          Engineer at{' '}
          <a href="https://www.avenuecode.com/" target="_blank">
            Avenue Code
          </a>
          , where I'm helping to build a new platform for a large retailer in
          the US.
        </p>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          I'm passionate about technology and I love to learn new things. I'm
          always looking for new challenges and opportunities to grow as a
          professional.
        </p>
      </div>
    </section>
  );
}
