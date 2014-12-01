function hufRound(x)
    {
        if (x > 0) {
            return (x % 5) >= 2.5 ? parseInt(x / 5) * 5 + 5 : parseInt(x / 5) * 5;
        } else {
            return ((Math.abs(x) % 5) >= 2.5 ? parseInt(Math.abs(x) / 5) * 5 + 5 : parseInt(Math.abs(x) / 5) * 5)*-1;
        }
    }
