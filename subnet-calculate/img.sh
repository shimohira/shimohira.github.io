for ((i=0;i<=32;i++));
do
  echo download Image-$i
  curl -o "${i}.gif" "http://www.davidc.net/sites/default/subnets/img/${i}.gif";
done