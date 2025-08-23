import React, { useState } from 'react';
import {
  Shield,
  Satellite,
  Eye,
  EyeOff,
  AlertCircle,
  Globe,
  Users,
  Heart
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LoginScreen: React.FC = () => {
  const { login, isLoading } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [selectedDemo, setSelectedDemo] = useState('');

  const demoAccounts = [
    {
      id: 'unhcr.admin',
      name: 'UNHCR Emergency Coordinator',
      org: 'UNHCR',
      region: 'Caribbean Region',
      icon: Shield,
      color: 'blue',
      username: 'unhcr.admin',
      password: 'humanitarian2024'
    },
    {
      id: 'redcross.field',
      name: 'Red Cross Field Manager',
      org: 'International Red Cross',
      region: 'Haiti Operations',
      icon: Heart,
      color: 'red',
      username: 'redcross.field',
      password: 'response123'
    },
    {
      id: 'unicef.analyst',
      name: 'UNICEF Data Analyst',
      org: 'UNICEF',
      region: 'West Africa Hub',
      icon: Users,
      color: 'cyan',
      username: 'unicef.analyst',
      password: 'children2024'
    },
    {
      id: 'wfp.logistics',
      name: 'WFP Logistics Coordinator',
      org: 'World Food Programme',
      region: 'Central America',
      icon: Globe,
      color: 'orange',
      username: 'wfp.logistics',
      password: 'foodsecurity'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    const success = await login(username, password);
    if (!success) {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleDemoLogin = (account: typeof demoAccounts[0]) => {
    setUsername(account.username);
    setPassword(account.password);
    setSelectedDemo(account.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        {/* Left Side - Branding & Info */}
        <div className="flex items-center justify-center lg:justify-start">
          <img
            src="/logo.png"
            alt="SKAI Response Logo"
            className="h-30 w-auto"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Humanitarian Operations Dashboard
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Advanced AI-powered platform integrating satellite imagery analysis,
            GAN enhancement, and multilingual support for rapid disaster response
            and humanitarian coordination.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Satellite className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">SKAI Analysis</h3>
                <p className="text-sm text-gray-600">Automated damage detection</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">GAN Enhancement</h3>
                <p className="text-sm text-gray-600">Image quality improvement</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <div clas
