import type { ReactNode } from 'react'
import { Reveal } from '../components/ui/Reveal'
import { products, type Product } from '../data/product'

function RowBody({ product }: { product: Product }) {
  return (
    <>
      <div>
        <div className="work-num">{product.n}</div>
        <div className="work-meta">
          {product.meta.map((line, i) => (
            <span key={line}>
              {line}
              {i < product.meta.length - 1 ? <br /> : null}
            </span>
          ))}
        </div>
      </div>
      <div>
        <div className="work-kicker">{product.kicker}</div>
        <h3 className="work-title">{product.title}</h3>
        <p className="work-summary">{product.summary}</p>
        <div className="work-points">
          {product.points.map((point) => (
            <div className="work-point" key={point}>
              {point}
            </div>
          ))}
        </div>
        <ul className="tags">
          {product.tech.map((t) => (
            <li className="tag" key={t}>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

function ProductRow({ product }: { product: Product }): ReactNode {
  if (product.href) {
    return (
      <a
        className="work-row work-row--link"
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RowBody product={product} />
        <span className="work-row-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    )
  }
  return (
    <div className="work-row">
      <RowBody product={product} />
    </div>
  )
}

export function ProductSection() {
  return (
    <section id="products" className="section section--alt">
      <div className="section-inner">
        <Reveal>
          <div className="section-head">
            <div>
              <div className="section-kicker">Products</div>
            </div>
          </div>
        </Reveal>
        <Reveal stagger>
          {products.map((product) => (
            <ProductRow key={product.n} product={product} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
