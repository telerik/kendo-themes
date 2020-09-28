# root dir
dir=$(pwd)

# all packages
packages=$(ls $dir/packages/)

# all themes
themes=$(ls $dir/packages/ | grep -v 'theme-tasks')
