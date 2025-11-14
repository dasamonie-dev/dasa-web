interface ArticleContentProps {
  content: {
    intro?: string;
    sections: {
      heading?: string;
      content: string;
      subsections?: {
        title: string;
        content: string;
      }[];
    }[];
  };
}

export const ArticleContent = ({ content }: ArticleContentProps) => {
  return (
    <article className='w-full bg-base py-8 md:py-12'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]'>
        <div className='max-w-4xl mx-auto prose prose-sm md:prose-base lg:prose-lg'>
          {/* Intro Paragraph */}
          {content.intro && (
            <p className='text-sm lg:text-lg text-accent/80 leading-relaxed mb-6 md:mb-8'>
              {content.intro}
            </p>
          )}

          {/* Main Content Sections */}
          {content.sections.map((section, index) => (
            <section key={index} className='mb-8 md:mb-10'>
              {section.heading && (
                <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-accent mb-4'>
                  {section.heading}
                </h2>
              )}

              <p className='text-sm text-accent/80 leading-relaxed mb-4'>
                {section.content}
              </p>

              {/* Subsections */}
              {section.subsections && (
                <div className='space-y-4 md:space-y-6 mt-4'>
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex}>
                      <h3 className='text-[15px] md:text-lg lg:text-xl font-semibold text-accent mb-2'>
                        {subsection.title}
                      </h3>
                      <p className='text-sm md:text-[15px] text-accent/80 leading-relaxed'>
                        {subsection.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
};
