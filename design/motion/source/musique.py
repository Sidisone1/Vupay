import numpy as np, wave
SR=44100; D=21.5; N=int(SR*D); L=np.zeros(N); R=np.zeros(N); rng=np.random.default_rng(3)
def add(s,t0,pan=0,g=1):
    i=int(t0*SR); n=min(len(s),N-i)
    if n>0: L[i:i+n]+=s[:n]*g*(1-pan)*.5; R[i:i+n]+=s[:n]*g*(1+pan)*.5
f=lambda m:440*2**((m-69)/12)
def bala(m,d=.6):  # balafon-like wooden mallet
    n=int(d*SR); t=np.arange(n)/SR; fr=f(m)
    s=np.sin(2*np.pi*fr*t)*np.exp(-t/.18)+.5*np.sin(2*np.pi*fr*3.9*t)*np.exp(-t/.03)+.25*np.sin(2*np.pi*fr*9.2*t)*np.exp(-t/.01)
    return s*np.minimum(1,t/.002)
def bass(m,d=.4):
    n=int(d*SR); t=np.arange(n)/SR; return np.sin(2*np.pi*f(m)*t)*np.exp(-t/.2)*np.minimum(1,t/.004)
def kick():
    n=int(.3*SR); t=np.arange(n)/SR; fr=48+80*np.exp(-t/.03); return np.sin(2*np.pi*np.cumsum(fr)/SR)*np.exp(-t/.11)
nz=rng.standard_normal(int(.08*SR)); nz=nz-np.convolve(nz,np.ones(6)/6,'same')
def shaker(): t=np.arange(len(nz))/SR; return nz*np.exp(-t/.02)*np.minimum(1,t/.006)
def whoosh(d=.7):
    n=int(d*SR); t=np.arange(n)/SR; y=np.convolve(rng.standard_normal(n),np.ones(25)/25,'same'); return y*np.sin(np.pi*t/d)**2*2
def chime(m,d=1.6):
    n=int(d*SR); t=np.arange(n)/SR; fr=f(m); return (np.sin(2*np.pi*fr*t)+.4*np.sin(2*np.pi*fr*2*t)*np.exp(-t/.3))*np.exp(-t/.5)
bpm=104; b=60/bpm
prog=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]]  # Am F C G
roots=[45,41,36,43]
pat=[0,2,1,2,0,2,1,2]; acc=[1,.5,.8,.5,.9,.5,.8,.6]
nb=int(D/b)
for k in range(nb):
    t=k*b; bar=k//4; c=prog[bar%4]
    if t>20.9: break
    if t>=0.9:
        add(kick(),t,0,.55 if k%2==0 else .3)
        add(bass(roots[bar%4]+12 if k%4==2 else roots[bar%4]),t,0,.35)
    for h in range(2):
        tt=t+h*b/2
        if tt>=3.9 and tt<17.8: add(shaker(),tt,.4 if h else -.4,.10 if h else .06)
        if tt>=0.4:
            j=(k*2+h)%8; add(bala(c[pat[j]]+12),tt,(-.3 if h else .3),.22*acc[j])
# melody hook
mel=[(76,1),(74,.5),(72,.5),(74,1),(76,.5),(79,1.5),(0,1),(76,1),(74,.5),(72,.5),(69,2)]
for st in (4.0,11.6):
    t=st
    for m,d in mel:
        if m: add(bala(m,1.0),t,0,.32)
        t+=d*b
# sfx
add(chime(84),.5,0,.25); add(chime(88),1.0,0,.2)
for c in (3.3,17.55): add(whoosh(),c,0,.22)
add(chime(91,1.2),13.7,.2,.3); add(chime(96,1.4),13.78,-.2,.22)
for i,m in enumerate([69,72,76,81,84]): add(chime(m,2.5),18.2+i*.06,0,.18)
add(kick(),18.2,0,.8)
mix=np.stack([L,R],1); t=np.arange(N)/SR; mix*=np.minimum(1,(D-t)/.8)[:,None]
mix=np.tanh(mix*1.3)/np.tanh(1.3); mix/=np.abs(mix).max()*1.12
w=wave.open('music.wav','wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes((mix*32767).astype('<i2').tobytes()); w.close(); print('music ok')
