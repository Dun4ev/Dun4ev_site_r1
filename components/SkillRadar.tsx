import React, { useState, useRef, useEffect } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarRadiusAxis
} from 'recharts';
import { SKILL_METRICS } from '../constants';

export const SkillRadar: React.FC = () => {
  const [isRotating, setIsRotating] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsRotating(false);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsRotating(true);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const radarClass = `radar-web-base ${isRotating ? 'radar-rotate-web' : 'radar-web-static'}`;

  return (
    <div
      className="h-[300px] w-full mt-8 mb-12 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h4 className="text-sm font-semibold text-slate-200 mb-4 uppercase tracking-wider text-center">Competency Overview</h4>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILL_METRICS}>
          <PolarGrid stroke="#334155" className={radarClass} />
          <PolarAngleAxis
            dataKey="name"
            tick={{ fill: '#94a3b8', fontSize: 11 }}
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Skills"
            dataKey="value"
            stroke="#64ffda"
            strokeWidth={2}
            fill="#64ffda"
            fillOpacity={0.3}
            className={radarClass}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};