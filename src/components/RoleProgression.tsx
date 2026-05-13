import type { SoftwayProgressionRole } from '../data/softwayCareer';

type Props = {
  roles: SoftwayProgressionRole[];
  title?: string;
};

/**
 * LinkedIn-style vertical role ladder: newest at top, animated connector (bottom → top).
 */
const RoleProgression = ({ roles, title = 'Role Progression' }: Props) => {
  if (!roles.length) return null;

  return (
    <div className="mb-6 rounded-xl border border-gray-100 bg-gray-50 p-4 relative overflow-hidden">
      <style>{`
        @keyframes roleFlowUp {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        @keyframes roleLineGlow {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.55; }
        }
      `}</style>

      <h6 className="text-sm font-semibold text-gray-900 mb-3">{title}</h6>

      <div className="relative pl-6">
        <div
          className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-t from-blue-600 via-indigo-500 to-purple-500"
          style={{ animation: 'roleLineGlow 2.2s ease-in-out infinite' }}
        />
        <div className="absolute left-[5px] top-2 bottom-2 w-2" aria-hidden="true">
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #60a5fa, #7c3aed)',
              boxShadow: '0 0 18px rgba(99,102,241,0.55)',
              animation: 'roleFlowUp 2.8s linear infinite',
              transform: 'translateY(0)',
            }}
          />
        </div>

        <div className="space-y-3">
          {[...roles].reverse().map((r) => (
            <div key={`${r.role}-${r.duration}`} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0 animate-pulse" />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-semibold text-gray-900">{r.role}</span>
                  <span className="text-xs text-gray-500">({r.duration})</span>
                </div>
                <div className="text-xs text-gray-500">{r.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleProgression;
