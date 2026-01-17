import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Profiles.css';

export const Profiles = () => {
  const profiles = useMemo(
    () => [
      {
        id: 'leetcode',
        name: 'LeetCode',
        handle: 'devanshbansal25072004',
        url: 'https://leetcode.com/u/devanshbansal25072004/',
        accent: 'leetcode',
        icon: <span className="profiles__lc">LC</span>,
        image: '/assets/leetcode-dashboard.jpeg',
        imageAlt: 'LeetCode profile stats and activity',
      },
      {
        id: 'github',
        name: 'GitHub',
        handle: 'coder-devansh',
        url: 'https://github.com/coder-devansh',
        accent: 'github',
        icon: <SiGithub aria-hidden="true" />,
        image: '/assets/github-activity.jpeg',
        imageAlt: 'GitHub contribution activity',
      },
    ],
    []
  );

  const [brokenImages, setBrokenImages] = useState(() => ({}));
  const [zoomed, setZoomed] = useState(null);

  return (
    <motion.section
      className="profiles section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Coding Profiles
        </motion.h2>

        <p className="section-subtitle">
          Quick access to my coding activity and repositories.
        </p>

        <div className="profiles__grid">
          {profiles.map((p, index) => (
            <motion.article
              key={p.id}
              className={`profiles__card profiles__card--${p.accent}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: Math.min(index * 0.08, 0.16), duration: 0.45 }}
            >
              <div className="profiles__cardTop">
                <div className="profiles__icon" aria-hidden="true">
                  {p.icon}
                </div>
                <div className="profiles__meta">
                  <h3 className="profiles__name">{p.name}</h3>
                  <p className="profiles__handle">@{p.handle}</p>
                </div>
              </div>

              {p.image && !brokenImages[p.id] && (
                <button
                  type="button"
                  className="profiles__preview"
                  onClick={() => setZoomed({ src: p.image, alt: p.imageAlt || `${p.name} preview` })}
                  aria-label={`Open ${p.name} screenshot`}
                >
                  <img
                    src={p.image}
                    alt={p.imageAlt || `${p.name} preview`}
                    loading="lazy"
                    decoding="async"
                    className="profiles__previewImg"
                    onError={() => setBrokenImages((prev) => ({ ...prev, [p.id]: true }))}
                  />
                </button>
              )}

              <p className="profiles__desc">
                Open my {p.name} profile.
              </p>

              <div className="profiles__actions">
                <a
                  className="profiles__btn"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit <FaExternalLinkAlt aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {zoomed && (
        <div
          className="profiles__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Profile screenshot preview"
          onClick={() => setZoomed(null)}
        >
          <div className="profiles__lightboxInner" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="profiles__lightboxClose"
              onClick={() => setZoomed(null)}
              aria-label="Close preview"
            >
              Close
            </button>
            <img className="profiles__lightboxImg" src={zoomed.src} alt={zoomed.alt} />
          </div>
        </div>
      )}
    </motion.section>
  );
};
