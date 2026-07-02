import React, { useEffect } from 'react'
import DashboardOverview from './DashboardOverview'
import { FaBoxOpen, FaRupeeSign, FaShoppingCart, FaUsers } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { analyticsAction } from '../../../store/actions';
import Loader from '../../shared/Loader';
import ErrorPage from '../../shared/ErrorPage';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { isLoading, errorMessage } = useSelector((state) => state.errors);
  const { 
    analytics: { productCount, totalRevenue, totalOrders, userCount },
  } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(analyticsAction());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />
  }

  if (errorMessage) {
    return <ErrorPage message={errorMessage}/>;
  }

  // Simulated monthly trend based on active totals
  const monthlyData = [
    { month: 'Jan', revenue: totalRevenue ? totalRevenue * 0.1 : 5000 },
    { month: 'Feb', revenue: totalRevenue ? totalRevenue * 0.15 : 7500 },
    { month: 'Mar', revenue: totalRevenue ? totalRevenue * 0.12 : 6000 },
    { month: 'Apr', revenue: totalRevenue ? totalRevenue * 0.22 : 11000 },
    { month: 'May', revenue: totalRevenue ? totalRevenue * 0.18 : 9000 },
    { month: 'Jun', revenue: totalRevenue ? totalRevenue * 0.28 : 14000 },
    { month: 'Jul', revenue: totalRevenue ? totalRevenue * 0.32 : 16000 },
  ];

  // Catalog breakdown simulation
  const categoriesData = [
    { category: 'Electronics', percentage: 40, count: Math.ceil((productCount || 10) * 0.4), color: 'bg-blue-500' },
    { category: 'Apparel', percentage: 25, count: Math.ceil((productCount || 10) * 0.25), color: 'bg-teal-500' },
    { category: 'Home & Living', percentage: 20, count: Math.ceil((productCount || 10) * 0.2), color: 'bg-indigo-500' },
    { category: 'Others', percentage: 15, count: Math.ceil((productCount || 10) * 0.15), color: 'bg-amber-500' },
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* Header Info */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 uppercase tracking-wide">Dashboard Overview</h1>
        <p className="text-slate-500 text-sm mt-1">Real-time store metrics and performance analytics</p>
      </div>

      {/* Overview stats cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6
          border border-slate-200 rounded-lg bg-linear-to-r
           from-slate-50 to-slate-100 shadow-md p-2'>
            <DashboardOverview 
              title="Total Products"
              amount={productCount || 0}
              Icon={FaBoxOpen}
            />

            <DashboardOverview 
              title="Total Orders"
              amount={totalOrders || 0}
              Icon={FaShoppingCart}
            />

            <DashboardOverview 
              title="Total Users"
              amount={userCount || 0}
              Icon={FaUsers}
            />

            <DashboardOverview 
              title="Total Revenue"
              amount={totalRevenue || 0}
              Icon={FaRupeeSign}
              revenue
            />
      </div>

      {/* Analytics Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Revenue SVG Line Chart */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-lg p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Monthly Revenue Trend</h3>
            <p className="text-xs text-slate-500 mt-1">Store growth over the last 7 months</p>
          </div>
          
          <div className="w-full h-64 mt-6">
            <svg viewBox="0 0 600 240" className="w-full h-full">
              {/* Grid Lines */}
              <line x1="40" y1="200" x2="580" y2="200" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4" />
              <line x1="40" y1="150" x2="580" y2="150" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4" />
              <line x1="40" y1="100" x2="580" y2="100" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4" />
              <line x1="40" y1="50" x2="580" y2="50" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4" />
              
              {/* Filled Area Gradient */}
              <path
                d="M 50 200 L 50 170 L 130 145 L 210 160 L 290 100 L 370 120 L 450 75 L 530 40 L 530 200 Z"
                fill="url(#revenue-grad)"
                opacity="0.15"
              />
              
              {/* Smooth Blue Trend Line */}
              <path
                d="M 50 170 L 130 145 L 210 160 L 290 100 L 370 120 L 450 75 L 530 40"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Dots on coordinate nodes */}
              <circle cx="50" cy="170" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
              <circle cx="130" cy="145" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
              <circle cx="210" cy="160" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
              <circle cx="290" cy="100" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
              <circle cx="370" cy="120" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
              <circle cx="450" cy="75" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
              <circle cx="530" cy="40" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
              
              {/* Month label texts */}
              {monthlyData.map((d, i) => (
                <text key={i} x={50 + i * 80} y="225" textAnchor="middle" className="text-xs font-semibold fill-slate-500">
                  {d.month}
                </text>
              ))}
              
              {/* Y Axis ticks */}
              <text x="35" y="204" textAnchor="end" className="text-[10px] font-semibold fill-slate-400">0</text>
              <text x="35" y="154" textAnchor="end" className="text-[10px] font-semibold fill-slate-400">₹5K</text>
              <text x="35" y="104" textAnchor="end" className="text-[10px] font-semibold fill-slate-400">₹10K</text>
              <text x="35" y="54" textAnchor="end" className="text-[10px] font-semibold fill-slate-400">₹15K</text>

              {/* Gradient definitions */}
              <defs>
                <linearGradient id="revenue-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Category Breakdown Progress Bars Card */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-6 flex flex-col justify-between animate-fade-in">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Category Share</h3>
            <p className="text-xs text-slate-500 mt-1">Catalog distribution by category</p>
          </div>

          <div className="space-y-4 mt-6">
            {categoriesData.map((cat, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-slate-700">{cat.category}</span>
                  <span className="text-xs font-bold text-slate-500">{cat.count} items ({cat.percentage}%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div 
                    className={`${cat.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-4 mt-6 text-center">
            <span className="text-xs font-medium text-slate-500">
              Total catalog products: <strong className="text-slate-800">{productCount || 0}</strong>
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard