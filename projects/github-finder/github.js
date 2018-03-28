class Github {
  constructor() {
    this.client_id = 'c2f8fa0b52ee795519b0';
    this.client_secret = '3dd9df56564671f14b8d88ca590f5093f5813bcf';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profileData = await profileResponse.json();
    const repoData = await repoResponse.json();

    return {
      profile: profileData,
      repos: repoData
    }
  }
}