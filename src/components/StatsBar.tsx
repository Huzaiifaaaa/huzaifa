import { Reveal } from './ui/Reveal'
import { stats } from '../data/stats'

export function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-bar-inner">
        <Reveal stagger>
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat-n">{stat.n}</div>
              <div className="stat-l">{stat.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  )
}
