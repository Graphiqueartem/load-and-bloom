import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { 
  User, 
  Video, 
  ShoppingCart, 
  Bell,
  LogOut,
  CheckCircle2,
  Clock,
  XCircle,
  Calendar,
  Download
} from 'lucide-react';
import dashboardHero from '@/assets/dashboard-hero.jpg';

const AccountDashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    document.title = "Your Dashboard — Manage Entries & Purchases | LoveDanceLive";
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic would go here
    navigate('/user-dashboard');
  };

  const handleLogout = async () => {
    await signOut();
  };

  // Mock data for demonstration
  const entries = [
    { id: 1, title: 'Solo Performance - Contemporary', status: 'Submitted', date: '2024-03-15' },
    { id: 2, title: 'Duet - Hip Hop', status: 'Under Review', date: '2024-03-10' },
    { id: 3, title: 'Group Dance - Jazz', status: 'Judged', date: '2024-02-28' }
  ];

  const purchases = [
    { id: 1, item: 'Premium Critique Package', date: '2024-03-12', status: 'Completed', download: true },
    { id: 2, item: 'Workshop Pass - London', date: '2024-03-05', status: 'Completed', download: false }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Submitted':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case 'Under Review':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'Judged':
        return <CheckCircle2 className="h-4 w-4 text-blue-600" />;
      case 'Qualified':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      default:
        return <XCircle className="h-4 w-4 text-red-600" />;
    }
  };

  if (!user) {
    return (
      <div className="page-gradient-bg">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={dashboardHero} 
              alt="Dancer using laptop" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/90 via-primary/85 to-turquoise/90"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
              <div className="flex justify-center mb-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 animate-scale-in">
                  <User className="h-12 w-12 text-white" />
                </div>
              </div>
              <p className="text-base sm:text-lg font-open-sans text-white/95">
                Manage your profile, submissions, and purchases — all in one place.
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins font-bold text-white drop-shadow-lg">
                Your Dashboard — Manage Entries & Purchases
              </h1>
            </div>
          </div>
        </section>

        {/* Section 1 - Login / Register */}
        <section className="py-8 md:py-16 bg-background">
          <div className="w-full px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Left side - Returning Users */}
              <Card className="bg-gradient-to-br from-turquoise/10 to-turquoise/5">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-poppins font-bold text-foreground mb-6">Returning Users</h2>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••" 
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Log In
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Right side - New Users */}
              <Card className="bg-gradient-to-br from-neon-pink/10 to-baby-pink/5">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-poppins font-bold text-foreground mb-6">New Users</h2>
                  <p className="text-muted-foreground mb-6">
                    Create an account to enter competitions and track your progress.
                  </p>
                  <Button size="lg" className="w-full" asChild>
                    <Link to="/auth">Register Now</Link>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    It's free to join — ages 6–21 with guardian approval if under 18.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Logged in view
  return (
    <div className="page-gradient-bg">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-neon-pink to-accent text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                <User className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-poppins font-bold">Welcome back</h1>
                <p className="text-white/90">Manage your account</p>
              </div>
            </div>
            <Button onClick={handleLogout} variant="secondary" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Log Out
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2 - Profile Overview */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-turquoise/10 to-turquoise/5 hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="gradient-icon-bg w-fit mx-auto mb-4">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Profile</h3>
                  <p className="text-lg font-bold text-foreground">Edit Info</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-neon-pink/10 to-baby-pink/5 hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="gradient-icon-bg w-fit mx-auto mb-4">
                    <Video className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">My Entries</h3>
                  <p className="text-lg font-bold text-foreground">{entries.length} Total</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-light-blue/10 to-turquoise/5 hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="gradient-icon-bg w-fit mx-auto mb-4">
                    <ShoppingCart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">My Purchases</h3>
                  <p className="text-lg font-bold text-foreground">{purchases.length} Orders</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/10 to-primary/5 hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="gradient-icon-bg w-fit mx-auto mb-4">
                    <Bell className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Messages</h3>
                  <p className="text-lg font-bold text-foreground">2 New</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 justify-center mb-12">
              <Button asChild>
                <Link to="/user-dashboard">Edit Profile</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/user-dashboard">View My Entries</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/coming-soon" state={{ pageTitle: "Dashboard Help" }}>Go to Dashboard Help</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Entry Tracking */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-turquoise/5 to-baby-pink/5">
        <div className="w-full px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
                Entry Tracking
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
            </div>

            <Card className="bg-gradient-to-br from-white to-background mb-6">
              <CardContent className="p-8">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-2">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-center font-medium">Registered</span>
                  </div>
                  <div className="flex-1 h-1 bg-green-500 mx-2"></div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-2">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-center font-medium">Video Uploaded</span>
                  </div>
                  <div className="flex-1 h-1 bg-yellow-500 mx-2"></div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mb-2">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-center font-medium">Judged</span>
                  </div>
                  <div className="flex-1 h-1 bg-gray-300 mx-2"></div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mb-2">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-center font-medium">Score Released</span>
                  </div>
                  <div className="flex-1 h-1 bg-gray-300 mx-2"></div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mb-2">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-center font-medium">Qualified</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center mt-6">
                  Results update automatically as judging completes.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {entries.map((entry) => (
                <Card key={entry.id} className="bg-gradient-to-br from-white to-background">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{entry.title}</h3>
                        <p className="text-sm text-muted-foreground">Submitted: {entry.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(entry.status)}
                        <Badge variant="outline">{entry.status}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Purchase History */}
      <section className="py-8 md:py-16 bg-background">
        <div className="w-full px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
                Purchase History
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-turquoise to-neon-pink rounded-full mx-auto"></div>
            </div>

            <Card className="bg-gradient-to-br from-white to-background">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-4 font-semibold">Item</th>
                        <th className="text-left p-4 font-semibold">Date</th>
                        <th className="text-left p-4 font-semibold">Status</th>
                        <th className="text-right p-4 font-semibold">Download</th>
                      </tr>
                    </thead>
                    <tbody>
                      {purchases.map((purchase) => (
                        <tr key={purchase.id} className="border-t">
                          <td className="p-4">{purchase.item}</td>
                          <td className="p-4 text-muted-foreground">{purchase.date}</td>
                          <td className="p-4">
                            <Badge variant="outline" className="bg-green-50">
                              {purchase.status}
                            </Badge>
                          </td>
                          <td className="p-4 text-right">
                            {purchase.download && (
                              <Button size="sm" variant="ghost">
                                <Download className="h-4 w-4" />
                              </Button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Button asChild>
                <Link to="/user-dashboard">View My Orders</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Notifications */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-light-blue/20 to-turquoise/10">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="gradient-icon-bg w-fit mx-auto mb-4">
              <Bell className="h-8 w-8 text-white" />
            </div>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              All competition updates, ticket announcements and results appear here in real time.
            </p>
            
            <div className="pt-6">
              <Button size="lg">Enable Notifications</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountDashboard;
