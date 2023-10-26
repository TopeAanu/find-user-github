class Github {
  constructor() {
    this.client_secret = '37452f35146786d2948b05d0b791660f5266b20c';
    this.client_id = '771ae98a4afab318c11a';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  // use fetch to make http request
  async getUser (user) {
    const getProfile = await fetch(`https://api.github.com/users/${user}?client_secret=${this.client_secret}&client_id=${this.client_id}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await getProfile.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}