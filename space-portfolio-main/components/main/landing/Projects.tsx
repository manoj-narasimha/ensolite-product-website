export function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <div className="project-carousel">
          <div className="project-grid">
            {/* Project 1 */}
            <div className="project-card reveal reveal-left">
              <h3>Content Repurposing</h3>
              <p>
                Turn one video into 23 different content pieces automatically.
                Our system analyzes your video content and generates multiple variations like product reviews, guides, FAQs, and technical specifications.
              </p>
              <div className="project-tools">
                <img src="https://www.gumloop.com/images/gumloop_logo.svg" alt="Gumloop" className="tool-logo" />
                <img src="https://openai.com/favicon.ico" alt="Deep Seek AI" className="tool-logo" />
                <img src="https://www.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png" alt="Google Sheets" className="tool-logo" />
                <img src="https://www.youtube.com/favicon.ico" alt="YouTube" className="tool-logo" />
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card reveal reveal-right">
              <h3>Lead Enrichment</h3>
              <p>
                Convert hours of manual research into a single click. Our AI automatically extracts comprehensive company and leadership details from just company names, enriching your lead data instantly.
              </p>
              <div className="project-tools">
                <img src="https://www.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png" alt="Google Sheets" className="tool-logo" />
                <img src="https://www.gumloop.com/images/gumloop_logo.svg" alt="Gumloop" className="tool-logo" />
                <img src="https://cdn-icons-png.flaticon.com/512/2721/2721725.png" alt="AI Research" className="tool-logo" />
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card reveal">
              <h3>Automated Invoice Processing</h3>
              <p>
                Monitor Gmail for incoming invoices, extract key details using AI vision, and automatically organize them into Google Sheets, creating a self-updating accounting system.
              </p>
              <div className="project-tools">
                <img src="https://www.gstatic.com/images/branding/product/2x/gmail_48dp.png" alt="Gmail" className="tool-logo" />
                <img src="https://openai.com/favicon.ico" alt="GPT-4 Vision" className="tool-logo" />
                <img src="https://www.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png" alt="Google Sheets" className="tool-logo" />
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card reveal">
              <h3>Project Setup Automation</h3>
              <p>
                Automatically create complete Jira project structures from Google Docs PRDs, including epics and tasks, streamlining project initialization.
              </p>
              <div className="project-tools">
                <img src="https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico" alt="Google Docs" className="tool-logo" />
                <img src="https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/favicon.png" alt="Jira" className="tool-logo" />
                <img src="https://www.gumloop.com/images/gumloop_logo.svg" alt="Gumloop" className="tool-logo" />
              </div>
            </div>

            {/* Project 5 */}
            <div className="project-card reveal">
              <h3>Customer Support AI</h3>
              <p>
                Process support tickets automatically using RAG to search company documentation and generate contextual responses, improving response time and accuracy.
              </p>
              <div className="project-tools">
                <img src="https://cdn.worldvectorlogo.com/logos/zendesk-1.svg" alt="Zendesk" className="tool-logo" />
                <img src="https://openai.com/favicon.ico" alt="RAG AI" className="tool-logo" />
                <img src="https://www.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png" alt="Google Sheets" className="tool-logo" />
              </div>
            </div>

            {/* Project 6 */}
            <div className="project-card reveal">
              <h3>AI Contract Generator</h3>
              <p>
                Generate customized legal contracts within seconds by inputting basic information, with direct integration to DocuSign for seamless signing workflow.
              </p>
              <div className="project-tools">
                <img src="https://www.gumloop.com/images/gumloop_logo.svg" alt="Gumloop" className="tool-logo" />
                <img src="https://openai.com/favicon.ico" alt="ChatGPT" className="tool-logo" />
                <img src="https://www.docusign.com/sites/all/themes/custom/docusign/favicons/favicon.ico" alt="DocuSign" className="tool-logo" />
              </div>
            </div>

            {/* Project 7 */}
            <div className="project-card reveal">
              <h3>Instagram Content Analysis</h3>
              <p>
                Analyze thousands of Instagram reels to decode viral content patterns, including hooks, CTAs, and content strategies for data-driven content creation.
              </p>
              <div className="project-tools">
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yR/r/lam-fZmwmvn.png" alt="Instagram" className="tool-logo" />
                <img src="https://www.gumloop.com/images/gumloop_logo.svg" alt="Gumloop" className="tool-logo" />
                <img src="https://www.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png" alt="Google Sheets" className="tool-logo" />
              </div>
            </div>
          </div>
        </div>

        <div className="projects-cta">
          <p className="subtitle">Innovating Today for a Smarter Tomorrow.</p>
          <a className="cta-button" href="/inspiration">Browse Products</a>
        </div>
      </div>
    </section>
  );
}
