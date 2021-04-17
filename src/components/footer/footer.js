import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p className="paragraph">
          Made with{' '}
          <span role="img" aria-label="laptop">
            ♥️
          </span>{' '}
          by{' '}
          <a href="http://www.giovannigaliero.co.uk/" rel="noopener noreferrer" target="_blank">
            {' '}
            Giovanni Galiero.
          </a>{' '}
          Copyright © by Giovanni Galiero
        </p>
      </div>
    </footer>
  )
}
